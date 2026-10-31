import Link from "next/link";
import Icon from "@/components/Icon";

export default function Breadcrumbs(props) {
  const { title, menuText } = props;

  return (
    <>
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>{title ? title : ""}</h2>
                <ul className="bread-list">
                  <li>
                    <Link href="/">Inicio</Link>
                  </li>
                  <li>
                    <Icon className="icofont-simple-right" />
                  </li>
                  <li className="active">{menuText ? menuText : "Doctors"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
