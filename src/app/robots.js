import { sitio } from "@/data/sitio";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${sitio.url}/sitemap.xml`,
  };
}
