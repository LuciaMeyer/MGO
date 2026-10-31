import { paginas } from "@/data/seo";
import { sitio } from "@/data/sitio";

// Reemplaza a public/sitemap.xml, que tenía las fechas fijas en 2025-04-04 y
// había que acordarse de actualizarlo a mano. Ahora sale de las rutas reales.
export default function sitemap() {
  const prioridades = {
    "/": 1.0,
    "/service": 0.9,
    "/doctors": 0.8,
    "/contact": 0.7,
    "/about": 0.6,
  };

  return Object.values(paginas).map((pagina) => ({
    url: `${sitio.url}${pagina.ruta}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: prioridades[pagina.ruta] ?? 0.5,
  }));
}
