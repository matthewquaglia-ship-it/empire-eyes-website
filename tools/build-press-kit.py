#!/usr/bin/env python3
"""Rebuild the downloadable press kit from press/index.html.

Run from the repo root after editing public/press/index.html (release date, contact, copy):
    pip install beautifulsoup4 playwright && playwright install chromium
    python3 tools/build-press-kit.py

Writes public/press/downloads/Empire-Eyes_Disco-Volante_Press-Kit.zip containing:
    Empire-Eyes_Disco-Volante_Press-Kit.pdf   two-page fact sheet
    Empire-Eyes_Disco-Volante_Press-Kit.txt   all copy, plain text, ready to paste
    Photos/                                   every hi-res image from downloads/
"""
import base64, html, pathlib, tempfile, zipfile
from bs4 import BeautifulSoup

HERE = pathlib.Path(__file__).resolve().parent.parent / "public" / "press"
DL = HERE / "downloads"
KIT = "Empire-Eyes_Disco-Volante_Press-Kit"
PAGE_URL = "https://www.empire-eyes.com/press"

soup = BeautifulSoup((HERE / "index.html").read_text(encoding="utf-8"), "html.parser")
def txt(el): return " ".join(el.get_text().split())
def paras(id_): return [txt(p) for p in soup.select(f"#{id_} p")]

meta = [m.strip() for m in soup.select_one("#k-meta").get_text("\n").split("\n") if m.strip()]
tracks = [txt(li) for li in soup.select("#k-tracks li")]
short = txt(soup.select_one("#b-short"))
long_ = txt(soup.select_one("#b-long"))
release = paras("k-release")
bio = paras("k-bio")
credits = list(zip([txt(d) for d in soup.select("#k-credits dt")], [txt(d) for d in soup.select("#k-credits dd")]))
contact = txt(soup.select_one("#k-contact"))
listen = soup.select_one("#k-listen")["href"]
photos = sorted(p for p in DL.glob("*.jpg"))

# ---- plain text ----
L = ["EMPIRE EYES — DISCO VOLANTE", "Press kit", "", *meta, "", f"Online: {PAGE_URL}", f"Listen (private): {listen}", f"Contact: {contact}", "",
     "TRACKLIST", *[f"{i:02d}  {t}" for i, t in enumerate(tracks, 1)], "",
     "SHORT BLURB", short, "", "LONG BLURB", long_, "",
     "PRESS RELEASE", *sum(([p, ""] for p in release), []),
     "ARTIST", *sum(([p, ""] for p in bio), []),
     "CREDITS", *[f"{k}: {v}" for k, v in credits], "",
     "PHOTOS (in /Photos, free to use with credit: Empire Eyes)", *[f"- {p.name}" for p in photos], ""]
text = "\n".join(L)

# ---- PDF ----
def img64(name):
    return "data:image/jpeg;base64," + base64.b64encode((HERE / "img" / name).read_bytes()).decode()
e = html.escape
pdf_html = f"""<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
@page {{ size: A4; margin: 16mm 16mm 14mm; }}
* {{ margin:0; padding:0; box-sizing:border-box; }}
body {{ font-family: Inter, system-ui, sans-serif; color:#111; font-size:9.5pt; line-height:1.55; }}
h1 {{ font-size:22pt; letter-spacing:.12em; font-weight:500; }}
.artist {{ letter-spacing:.35em; color:#666; font-size:9pt; margin-top:2mm; }}
.label {{ font-size:7pt; letter-spacing:.35em; text-transform:uppercase; color:#888; margin:6mm 0 2mm; border-top:.3pt solid #ccc; padding-top:3mm; }}
.top {{ display:flex; gap:7mm; align-items:flex-end; }}
.top img {{ width:52mm; height:52mm; object-fit:cover; }}
.meta {{ font-size:7.5pt; letter-spacing:.2em; text-transform:uppercase; color:#555; margin-top:4mm; line-height:1.9; }}
p + p {{ margin-top:2.2mm; }}
ol {{ list-style:none; columns:2; font-size:8.5pt; letter-spacing:.08em; text-transform:uppercase; }}
ol li span {{ color:#999; margin-right:3mm; }}
table {{ border-collapse:collapse; font-size:8.5pt; }} td {{ padding:.6mm 6mm .6mm 0; }} td:first-child {{ color:#888; text-transform:uppercase; letter-spacing:.2em; font-size:7pt; }}
.photo {{ width:100%; height:62mm; object-fit:cover; margin-top:6mm; }}
.foot {{ margin-top:6mm; font-size:7.5pt; color:#666; }}
.break {{ break-before: page; }}
</style></head><body>
<div class="top"><img src="{img64('cover.jpg')}"><div>
<h1>DISCO VOLANTE</h1><div class="artist">EMPIRE EYES</div>
<div class="meta">{'<br>'.join(e(m) for m in meta)}</div></div></div>
<div class="label">About the record</div><p>{e(long_)}</p>
<div class="label">Tracklist</div><ol>{''.join(f'<li><span>{i:02d}</span>{e(t)}</li>' for i,t in enumerate(tracks,1))}</ol>
<div class="label">Credits</div><table>{''.join(f'<tr><td>{e(k)}</td><td>{e(v)}</td></tr>' for k,v in credits)}</table>
<img class="photo" src="{img64('in-the-studio.jpg')}">
<div class="break"></div>
<div class="label" style="border-top:none;margin-top:0;padding-top:0">Press release</div>{''.join(f'<p>{e(p)}</p>' for p in release)}
<div class="label">Artist</div>{''.join(f'<p>{e(p)}</p>' for p in bio)}
<div class="label">Short blurb</div><p>{e(short)}</p>
<div class="label">Listen · Contact</div>
<p>Listen (private): {e(listen)}<br>Press page: {e(PAGE_URL)}<br>Contact: {e(contact)}</p>
<p class="foot">Hi-res photos and cover are in the Photos folder of this kit. Free to use with credit: Empire Eyes.</p>
</body></html>"""

from playwright.sync_api import sync_playwright
with tempfile.TemporaryDirectory() as tmp:
    tmp = pathlib.Path(tmp)
    pdf = tmp / f"{KIT}.pdf"
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page()
        pg.set_content(pdf_html, wait_until="networkidle"); pg.pdf(path=str(pdf), format="A4", print_background=True)
        b.close()
    out = DL / f"{KIT}.zip"
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(pdf, f"{KIT}/{KIT}.pdf")
        z.writestr(f"{KIT}/{KIT}.txt", text)
        for ph in photos:
            z.write(ph, f"{KIT}/Photos/{ph.name}", compress_type=zipfile.ZIP_STORED)
print(f"Built {out} ({out.stat().st_size/1e6:.1f} MB)")
