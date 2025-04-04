"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Preloader() {
  let pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`preloader ${isLoading ? "visible" : "preloader-deactivate"}`}
    >
      <div className="loader">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
        <div className="indicator">
          <Image
            src="/img/section-img-blanco.webp"
            alt="Loading..."
            width={25}
            height={25}
            priority
            // style={{ transform: "rotate(-90deg)" }}
          />
        </div>
      </div>
    </div>
  );
}
