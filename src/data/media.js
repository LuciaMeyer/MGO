const CLOUDINARY = "https://res.cloudinary.com/dw272kava/video/upload";
const VIDEO_ID = "v1739748771/MGO/video1_icoj5g";

// q_auto y f_auto dejan que Cloudinary elija calidad y formato segun el
// navegador, en lugar de servir siempre el mp4 original. El archivo subido no
// se modifica: Cloudinary genera una version derivada.
export const videoInstitucional = {
  src: `${CLOUDINARY}/q_auto,f_auto/${VIDEO_ID}.mp4`,
  // Primer fotograma del propio video, para que el hueco no quede en negro
  // mientras carga.
  poster: `${CLOUDINARY}/so_0,w_1200,q_auto,f_auto/${VIDEO_ID}.jpg`,
};
