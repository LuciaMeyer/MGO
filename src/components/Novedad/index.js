"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import { novedad } from "@/data/novedad";

// Marca en el navegador de cada visitante qué novedad ya cerró. Al cambiar el
// id en src/data/novedad.js la clave cambia y el modal vuelve a aparecer.
const clave = (id) => `mgo-novedad-${id}`;

// Marca que la novedad ya se mostró en esta carga del sitio. Al vivir en el
// módulo y no en el componente, sobrevive a que React vuelva a montar el
// modal al cambiar de ruta, y en cambio se reinicia sola cuando el navegador
// carga el documento de nuevo: entrar por primera vez o refrescar.
let yaMostrada = false;

// Mismo corte que usa novedad.css para el botón de cerrar.
const CONSULTA_MOBILE = "(max-width: 575px)";

export default function Novedad() {
  const [abierto, setAbierto] = useState(false);
  const [esMobile, setEsMobile] = useState(false);
  const botonCerrar = useRef(null);

  // Se elige la imagen acá, en JavaScript, en lugar de mostrar y esconder dos
  // con CSS: así el navegador descarga una sola.
  useEffect(() => {
    const mq = window.matchMedia(CONSULTA_MOBILE);
    const actualizar = () => setEsMobile(mq.matches);
    actualizar();
    mq.addEventListener("change", actualizar);
    return () => mq.removeEventListener("change", actualizar);
  }, []);

  useEffect(() => {
    if (!novedad.activa || yaMostrada) return;
    yaMostrada = true;

    if (novedad.frecuencia === "siempre") {
      setAbierto(true);
      return;
    }

    // En ventana privada o con las cookies bloqueadas, leer localStorage
    // lanza. Si no se puede saber, se muestra igual.
    let yaVista = false;
    try {
      yaVista = window.localStorage.getItem(clave(novedad.id)) === "1";
    } catch {}

    if (!yaVista) setAbierto(true);
  }, []);

  const cerrar = useCallback(() => {
    setAbierto(false);
    if (novedad.frecuencia === "siempre") return;
    try {
      window.localStorage.setItem(clave(novedad.id), "1");
    } catch {}
  }, []);

  // Mientras está abierto: no se scrollea el fondo y Escape cierra.
  useEffect(() => {
    if (!abierto) return;

    const scrollPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const alTeclear = (e) => {
      if (e.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", alTeclear);

    botonCerrar.current?.focus();

    return () => {
      document.body.style.overflow = scrollPrevio;
      document.removeEventListener("keydown", alTeclear);
    };
  }, [abierto, cerrar]);

  if (!abierto) return null;

  return (
    <div
      className="novedad-fondo"
      onClick={cerrar}
      role="dialog"
      aria-modal="true"
      aria-label="Novedad"
    >
      {/* El clic dentro de la tarjeta no debe cerrar el modal. */}
      <div className="novedad-caja" onClick={(e) => e.stopPropagation()}>
        <span className="novedad-etiqueta">Novedad</span>

        <button
          type="button"
          ref={botonCerrar}
          className="novedad-cerrar"
          onClick={cerrar}
          aria-label="Cerrar"
        >
          <Icon className="fa fa-times" />
        </button>

        <Image
          className="novedad-imagen"
          src={esMobile && novedad.imagenMobile ? novedad.imagenMobile : novedad.imagen}
          alt={novedad.alt}
          sizes="(max-width: 575px) 92vw, 820px"
          priority
        />
      </div>
    </div>
  );
}
