import Link from "next/link";

import Icon from "@/components/Icon";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer f-link">
          <h2>Menú</h2>
            <ul>
              <li>
                <Link href="/">
                  <Icon className="fa fa-caret-right" aria-hidden="true" />Inicio
                </Link>
              </li>
              <li>
                <Link href="/doctors">
                  <Icon className="fa fa-caret-right" aria-hidden="true" />Profesionales
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <Icon className="fa fa-caret-right" aria-hidden="true" />Tratamientos
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <Icon className="fa fa-caret-right" aria-hidden="true" />Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <Icon className="fa fa-caret-right" aria-hidden="true" />Contacto
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </>
  );
}
