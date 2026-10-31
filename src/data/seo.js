import { sitio } from "./sitio";

// Título y descripción de cada página: es el texto que Google muestra en los
// resultados. Antes las 5 páginas compartían el título "MGOdontología".
//
// Criterio: "Rosario" en todos los títulos, porque las búsquedas que trae
// Google Ads son locales ("dentista rosario", "implante dental rosario",
// "odontólogo cerca de mí"). Títulos hasta ~60 caracteres y descripciones
// hasta ~155, que es lo que Google alcanza a mostrar sin recortar.
//
// IMPORTANTE: el título arranca siempre con "MGOdontología". El <title> es a
// la vez el texto de la pestaña del navegador y el titular en Google, y en la
// pestaña solo entran los primeros ~15 caracteres: con la marca adelante se
// sigue leyendo "MGOdontología" como siempre. No invertir este orden.
//
// NO usar la palabra "dentista" en ningún texto visible: está mal dicho en el
// rubro. Esa búsqueda se capta por otras vías, no escribiéndola en la página
// (ver el tipo Dentist del JSON-LD, que es vocabulario interno de schema.org
// y no se muestra en ningún lado).
export const paginas = {
  home: {
    ruta: "/",
    titulo: "MGOdontología | Clínica odontológica en Rosario",
    descripcion:
      "Clínica odontológica en Rosario con dos sedes. Implantes, ortodoncia, endodoncia y blanqueamiento para todas las edades. Pedí tu turno por teléfono.",
  },
  doctors: {
    ruta: "/doctors",
    titulo: "MGOdontología | Odontólogos en Rosario",
    descripcion:
      "Conocé al equipo de MGO en Rosario: Florencia Meyer, odontopediatra y ortodoncista, y Mariano Gulisano, especialista en implantes y prótesis.",
  },
  service: {
    ruta: "/service",
    titulo: "MGOdontología | Tratamientos odontológicos en Rosario",
    descripcion:
      "Implantes dentales, ortodoncia, endodoncia mecanizada, blanqueamiento, prótesis, periodoncia y odontopediatría en nuestras dos sedes de Rosario.",
  },
  about: {
    ruta: "/about",
    titulo: "MGOdontología | 65 años de odontología en Rosario",
    descripcion:
      "Más de 65 años de trayectoria en odontología en Rosario. Conocé la historia de Meyer Gulisano Odontología y nuestro enfoque de atención personalizada.",
  },
  contact: {
    ruta: "/contact",
    titulo: "MGOdontología | Turnos y contacto en Rosario",
    descripcion:
      "Dos consultorios en Rosario: Tucumán 1601 PB (0341 4252429) y Gálvez 1078 (0341 6799454). Consultá horarios y pedí tu turno por teléfono.",
  },
};

// Arma el objeto metadata de Next para una página, incluyendo canonical y
// OpenGraph, para no repetir la misma estructura en cada archivo.
export function metadataDe(clave) {
  const pagina = paginas[clave];

  return {
    title: { absolute: pagina.titulo },
    description: pagina.descripcion,
    alternates: { canonical: pagina.ruta },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: pagina.ruta,
      siteName: sitio.nombre,
      title: pagina.titulo,
      description: pagina.descripcion,
      images: [
        { url: sitio.ogImage, width: 1200, height: 630, alt: sitio.nombre },
      ],
    },
  };
}
