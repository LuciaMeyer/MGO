import { consultorios } from "@/data/consultorios";
import { sitio } from "@/data/sitio";
import { tratamientos } from "@/data/tratamientos";

// Datos estructurados de negocio local. Es lo que Google lee para mostrar el
// negocio en búsquedas locales y en el panel lateral: nombre, direcciones,
// teléfonos y horarios de cada sede. Antes el sitio no tenía nada de esto.
//
// Cada sede va como una entidad Dentist propia, que es lo que corresponde
// cuando hay más de una dirección física.
export default function JsonLd() {
  const sedes = consultorios.map((sede) => ({
    "@type": "Dentist",
    "@id": `${sitio.url}/#${sede.id}`,
    name: `${sitio.nombre} — ${sede.nombre}`,
    url: sitio.url,
    telephone: sede.telefonoE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: sede.calle,
      addressLocality: sede.localidad,
      addressRegion: sede.provincia,
      postalCode: sede.codigoPostal,
      addressCountry: sede.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: sede.geo.lat,
      longitude: sede.geo.lng,
    },
    openingHoursSpecification: sede.horariosSchema.map((tramo) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: tramo.dias,
      opens: tramo.abre,
      closes: tramo.cierra,
    })),
    medicalSpecialty: "Dentistry",
    availableService: tratamientos.map((tratamiento) => ({
      "@type": "MedicalProcedure",
      name: tratamiento.title,
      description: tratamiento.desc,
    })),
    // El perfil de Google Business de esta sede, más los perfiles sociales
    // de la marca. Es lo que le confirma a Google que el sitio y ese perfil
    // son el mismo negocio.
    sameAs: [sede.perfilGoogle, ...sitio.sameAs].filter(Boolean),
  }));

  const grafo = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${sitio.url}/#website`,
        url: sitio.url,
        name: sitio.nombre,
        description: sitio.descripcion,
        inLanguage: "es-AR",
        publisher: { "@id": `${sitio.url}/#${consultorios[0].id}` },
      },
      ...sedes,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro y se arma en el servidor a partir de
      // src/data, no de entrada del usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }}
    />
  );
}
