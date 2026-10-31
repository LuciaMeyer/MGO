"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navegacion } from "@/data/navegacion";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="main-menu">
        <nav className="navigation">
          <ul className="nav menu">
            {navegacion.map((item) => (
              <li key={item.href}>
                {/* La clase active pinta el texto y la barra inferior con el
                    color institucional. Antes solo la llevaba Contacto. */}
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
