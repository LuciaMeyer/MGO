import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import { consultorios } from "@/data/consultorios";

import Icon from "@/components/Icon";
import { metadataDe } from "@/data/seo";

export const metadata = metadataDe("contact");

export default function Contact() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Llamanos y reservá un turno" menuText="Contacto" />

      <section className="contact-us section">
        <div className="container">
          {consultorios.map((sede, index) => (
            <div key={sede.id} className={index === 0 ? "inner" : "inner mt-5"}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-us-left">
                    <div className="map-embed">
                      <iframe
                        src={sede.mapaEmbed}
                        title={`Mapa de ${sede.nombre} - ${sede.calle}, ${sede.localidad}`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-us-form">
                    <h2>{sede.nombre}</h2>
                    <h5>{sede.direccionCompleta}</h5>
                    <div className="my-5">
                      <ul className="list-unstyled fs-6">
                        <li className="d-flex align-items-center py-2">
                          <Icon className="icofont icofont-ui-call me-2" /> Teléfono fijo:{" "}
                          {sede.telefono}
                        </li>
                        {sede.horarios.map((horario) => (
                          <li
                            key={horario.dias}
                            className="d-flex align-items-center py-2"
                          >
                            <Icon className="icofont icofont-calendar me-2" />{" "}
                            {capitalizar(horario.dias)} de {horario.desde} hs. a{" "}
                            {horario.hasta} hs.
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
