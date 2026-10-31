import ThemeLogo from "../../../../public/img/logo_mgo.webp";
import Image from "next/image";
import LazyVideo from "@/components/LazyVideo";
import { videoInstitucional } from "@/data/media";

import Icon from "@/components/Icon";

export default function WhyChoose() {
  return (
    <>
      <section className="why-choose section">
        <div className="container" >
          <div className="row">
            <div className="d-flex flex-column justify-content-center align-items-center pb-5 mb-5" style={{height: "30vh"}}>
              <Image src={ThemeLogo} alt="#" width={300} height={100} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
                <h3>Qué nos diferencia</h3>
                <p>
                Nuestro compromiso con la atención personalizada y un enfoque preventivo integral.
                Contamos con una gran variedad de tratamientos, adaptados a todas las edades, desde niños
                hasta adultos mayores. Garantizamos la salud bucal de nuestros pacientes a
                través de soluciones innovadoras y de alta calidad, siempre con un trato cercano, humano y
                atento a las necesidades individuales.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <Icon className="fa fa-caret-right" />Atención Personalizada
                      </li>
                      <li>
                        <Icon className="fa fa-caret-right" />Enfoque Preventivo
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-3">
                    <ul className="list">
                      <li>
                        <Icon className="fa fa-caret-right" />Tratamientos Innovadores
                      </li>
                      <li>
                        <Icon className="fa fa-caret-right" />Trato Humano y Cercano
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-lg-0 mt-4">
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
              <LazyVideo
                src={videoInstitucional.src}
                poster={videoInstitucional.poster}
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
