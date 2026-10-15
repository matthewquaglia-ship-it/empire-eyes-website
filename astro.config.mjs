import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.empire-eyes.com",
  integrations: [sitemap({ filter: (page) => !page.includes("/listening-room") })],
});
