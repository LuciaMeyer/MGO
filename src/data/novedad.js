// Novedad que se muestra como modal al entrar al sitio, en cualquier página.
//
// CÓMO CARGAR UNA NOVEDAD NUEVA
//   1. Poner la imagen en public/img/ (webp, jpg o png).
//   2. Cambiar los imports de abajo para que apunten a esos archivos.
//
// TAMAÑOS RECOMENDADOS
//   Escritorio (horizontal):  1000 x 750 px  (proporción 4:3)
//   Celular    (vertical):     900 x 1200 px (proporción 3:4)
//   Si solo hay una, usar la horizontal: se adapta igual, solo que en
//   celular se ve más chica.
//   3. Cambiar `id` por uno distinto al anterior.
//   4. Escribir el `alt`, que es lo que leen los lectores de pantalla y lo
//      que se ve si la imagen no carga.
//   5. Pushear. Cloudflare publica solo.
//
// PARA APAGARLO
//   Poner `activa: false`. No hace falta borrar nada más.

// Imagen para pantallas anchas (computadora y tablet).
import imagen from "../../public/img/novedad-desktop.webp";

// Imagen vertical para celular. Es opcional: si no hay una, se usa la de
// arriba en todos los tamaños. Solo se descarga la que corresponde al
// dispositivo, nunca las dos.
import imagenMobile from "../../public/img/novedad-mobile.webp";

export const novedad = {
  activa: true,

  // "siempre"  → se abre al entrar al sitio y en cada refresh. Moverse entre
  //              secciones con el menú no la vuelve a abrir.
  // "una-vez"  → a cada persona se le muestra una sola vez, hasta que
  //              cambies el `id` de abajo; ahí vuelve a aparecerle a todos.
  frecuencia: "siempre",

  // Identificador de esta novedad. Cambiarlo al cargar una nueva.
  // Solo tiene efecto con frecuencia "una-vez".
  id: "scanner-3d-2026-10",

  imagen,
  imagenMobile,

  alt:
    "Nueva tecnología en Meyer Gulisano Odontología: scanner 3D intraoral. " +
    "Un modelo digital de tu boca en segundos y sin moldes, con mayor " +
    "precisión en coronas, implantes y ortodoncia.",
};
