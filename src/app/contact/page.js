import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import SectionLoader from "@/components/SectionLoader";


export default function Contact() {
  const urlCentro = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.393786091459!2d-60.6440938!3d-32.94061129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3c69f36cad%3A0x6468597c08bd9334!2sTucum%C3%A1n%201601%2C%20S2000AMO%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1741387881630!5m2!1ses-419!2sar"
  const urlAbasto = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.328089546718!2d-60.6433548!3d-32.968744799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aba68ad67f75%3A0x108176e22b73c5ab!2sG%C3%A1lvez%201078%2C%20S2001NWB%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1739987304904!5m2!1ses-419!2sar"
  return (
    <>
      <SectionLoader />
      <Header />

      <Breadcrumbs title="Llamanos y reservá un turno" menuText="Contacto" />

      <section className="contact-us section">
        <div className="container">

          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe src={urlCentro}></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Consultorio Centro</h2>
                  <h5>
                    Tucumán 1601 PB, Rosario.
                  </h5>
                  <div className="my-5">
                  <ul className="list-unstyled fs-6">
                    <li className="d-flex align-items-center py-2">
                      <i className="icofont icofont-ui-call me-2"></i> Teléfono fijo: (0341) 4252429
                    </li>
                    <li className="d-flex align-items-center py-2">
                      <i className="icofont icofont-calendar me-2"></i> Lunes a jueves de 14.00 a 20.00
                    </li>
                    <li className="d-flex align-items-center py-2">
                      <i className="icofont icofont-calendar me-2"></i> Viernes de 9.00 a 14.00
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inner mt-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                  <iframe src={urlAbasto}></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Consultorio Abasto</h2>
                  <h5>
                    Gálvez 1078, Rosario.
                  </h5>
                  <div className="my-5">
                  <ul className="list-unstyled fs-6">
                    <li className="d-flex align-items-center py-2">
                      <i className="icofont icofont-ui-call me-2"></i> Teléfono fijo: (0341) 6799454
                    </li>
                    <li className="d-flex align-items-center py-2">
                      <i className="icofont icofont-calendar me-2"></i> lunes a viernes de 9.00 a 19.00
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
