import Link from "next/link";

import Icon from "@/components/Icon";
import { navegacion } from "@/data/navegacion";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer f-link">
          <h2>Menú</h2>
          <ul>
            {navegacion.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Icon className="fa fa-caret-right" />
                  {item.texto}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
