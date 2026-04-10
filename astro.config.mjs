import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.empire-eyes.com",
  base: process.env.GITHUB_ACTIONS ? "/empire-eyes-website" : "/",
  integrations: [sitemap()],
});
