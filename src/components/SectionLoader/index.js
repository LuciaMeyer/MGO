"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SectionLoader() {
  let pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`sectionLoader ${isLoading ? "visible" : "sectionLoader-deactivate"}`}></div>
  );
}
