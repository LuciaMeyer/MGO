"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="main-menu">
        <nav className="navigation">
          <ul className="nav menu">
            <li>
              <Link href="/">
                Inicio
              </Link>
              <ul className="dropdown">
              </ul>
            </li>
            <li>
              <Link href="/doctors">
                Profesionales
              </Link>
              <ul className="dropdown">
              </ul>
            </li>
            <li>
              <Link href="/service">
                Tratamientos
              </Link>
              <ul className="dropdown">
              </ul>
            </li>
            <li>
              <Link href="/about">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
