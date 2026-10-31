import { sitio } from "@/data/sitio";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Todavía tiene el texto de relleno de la plantilla.
      disallow: "/testimonials",
    },
    sitemap: `${sitio.url}/sitemap.xml`,
  };
}
