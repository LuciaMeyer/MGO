"use client";

import { useEffect, useRef } from "react";

// El video no se descarga en la carga inicial de la pagina: se le asigna el
// src cuando el usuario esta a 400px de la seccion, asi al llegar ya esta
// reproduciendose solo, igual que antes.
export default function LazyVideo({ src, poster, ...props }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cargar = () => {
      if (video.src) return;
      video.src = src;
      // El autoplay puede fallar si el navegador lo bloquea; no es critico,
      // el usuario tiene los controles.
      video.play().catch(() => {});
    };

    if (!("IntersectionObserver" in window)) {
      cargar();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          cargar();
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      preload="none"
      muted
      controls
      autoPlay
      loop
      playsInline
      {...props}
    />
  );
}
