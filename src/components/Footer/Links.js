import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer f-link">
          <h2>Menú</h2>
            <ul>
              <li>
                <Link href="/">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>Inicio
                </Link>
              </li>
              <li>
                <Link href="/doctors">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>Profesionales
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>Tratamientos
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>Contacto
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </>
  );
}
