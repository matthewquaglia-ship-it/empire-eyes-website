// Artist-level profile links (used in Follow section)
// To update: change the url for each platform
export const artistLinks = [
  { name: "Spotify",       url: "https://open.spotify.com/artist/6fvpctR3TvJWAnRI0Q8wWe" },
  { name: "Apple Music",   url: "https://music.apple.com/us/artist/empire-eyes/1672824701" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCsqBvJcVsGXQg0yzxqJAZZA" },
  { name: "TIDAL",         url: "https://listen.tidal.com/artist/37490305" },
  { name: "Bandcamp",      url: "https://empireeyes.bandcamp.com/" },
  { name: "SoundCloud",    url: "https://soundcloud.com/empireeyes" },
  { name: "Deezer",        url: "https://link.deezer.com/s/32X2QWbJZKyGa8RAUaydg" },
] as const;

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/empire.eyes/",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@empire.eyes.official",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@empireeyes",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/empireeyesmusic",
  },
] as const;

export const videos = [
  {
    id: "XbyrTjEagsU",
    title: "In Time",
    label: "Official Music Video",
    year: 2024,
  },
  {
    id: "u6ERoY_wHrM",
    title: "Set Me Free",
    label: "Music Video",
    year: 2026,
  },
  {
    id: "kSdhvDhXHv8",
    title: "Satori 悟り",
    label: "Music Video",
    year: 2026,
  },
] as const;

export const releases = [
  {
    title: "In Time",
    type: "Single",
    year: 2023,
    datePublished: "2023-02-03",
    genre: "Alternative / Future Pop",
    artwork: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b7d426ba878feddd1ebf844e",
    lore: "SELL YOUR SOUL TO YOURSELF... DON'T LEAVE ANYTHING BEHIND",
    platforms: [
      { name: "Spotify",       url: "https://open.spotify.com/track/5K7fXLvPYSHA1R7MQa9qdL" },
      { name: "Apple Music",   url: "https://music.apple.com/au/album/in-time/1672839376?i=1672839377" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_lLTp_ZvOhdUVPwQtcywo1A64TAf8Dk7NM" },
      { name: "TIDAL",         url: "https://tidal.com/browse/track/277682490" },
      { name: "Bandcamp",      url: "https://empireeyes.bandcamp.com/track/in-time" },
      { name: "SoundCloud",    url: "https://soundcloud.com/empireeyes/in-time" },
      { name: "Deezer",        url: "https://deezer.page.link/8nG6TR2d9YHGMcFLA" },
    ],
  },
  {
    title: "TILT",
    type: "Album",
    year: 2024,
    datePublished: "2024-11-22",
    genre: "Alternative / Future Pop",
    tracks: 8,
    artwork: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0224aef36d2462017b385c2c0a",
    lore: `TILT is the moment the machine catches you forcing it. In pinball, when you shake the cabinet hard enough to steer the ball where you want it to go, the game detects the manipulation — the controls lock, the controls go dead, and you lose everything.\n\nThe album carries that image through the interior life: what happens when a person, a relationship, a system, or a culture tries to force coherence instead of earning it. The shake looks like ambition, urgency, the relentless need to arrive. The lockout looks like burnout, collapse, the sudden silence when the controls stop responding to your hands.\n\nBut TILT isn't punishment — it's protection. The machine shuts down to prevent its own destruction. And in that silence, something else becomes available: the recognition that the game was never won by forcing the score.\n\nEight songs trace the arc from the forcing to the stillness — from the aggressive grip on outcomes to the moment you take your hands off and realise the game was always playing you back.`,
    platforms: [
      { name: "Spotify",       url: "https://open.spotify.com/album/5DFrs1CRPRYn0Xu0canyOH" },
      { name: "Apple Music",   url: "https://music.apple.com/au/album/tilt/1777806382" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_meY1niEwsg7StKn0dP8AdCpbOe8Q0v-9k" },
      { name: "TIDAL",         url: "https://tidal.com/browse/album/397376823" },
      { name: "Bandcamp",      url: "https://empireeyes.bandcamp.com/album/tilt" },
      { name: "SoundCloud",    url: "https://soundcloud.com/empireeyes/sets/tilt" },
      { name: "Deezer",        url: "https://deezer.page.link/31CDv2kKLhAqJVGG9" },
    ],
  },
] as const;

export const artist = {
  name: "Empire Eyes",
  label: "ArteMusique",
  subscribeUrl: "https://www.empire-eyes.com/subscribe",
} as const;
