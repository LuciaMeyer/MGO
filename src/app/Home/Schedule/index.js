import Link from "next/link";

export default function Schedule() {
  const urlCentro = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.393786091459!2d-60.6440938!3d-32.94061129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3c69f36cad%3A0x6468597c08bd9334!2sTucum%C3%A1n%201601%2C%20S2000AMO%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1741387881630!5m2!1ses-419!2sar"
  const urlAbasto = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.328089546718!2d-60.6433548!3d-32.968744799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aba68ad67f75%3A0x108176e22b73c5ab!2sG%C3%A1lvez%201078%2C%20S2001NWB%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1739987304904!5m2!1ses-419!2sar"
  
  return (
    <>
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
          <div className="row align-items-stretch">
              <div  className="col-lg-4 col-md-6 col-12 ">
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="single-content">
                      <span>Consultorio Centro - Rosario</span>
                      <h4>Tucumán 1601 PB</h4>
                      <p style={{ margin: "0.5rem 0" }}>
                        Solicitar turnos al teléfono fijo: (0341) 4252429
                      </p>
                    </div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.393786091459!2d-60.6440938!3d-32.94061129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3c69f36cad%3A0x6468597c08bd9334!2sTucum%C3%A1n%201601%2C%20S2000AMO%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1741387881630!5m2!1ses-419!2sar"
                    style={{width: "100%", border: "none"}}></iframe> */}
                    <iframe src={urlCentro} style={{width: "100%", border: "none"}}></iframe>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="single-content">
                      <span>Consultorio Abasto - Rosario</span>
                      <h4>Gálvez 1078</h4>
                      <p style={{ margin: "0.5rem 0" }}>
                        Solicitar turnos al teléfono fijo: (0341) 6799454
                      </p>
                      <iframe src={urlAbasto} style={{width: "100%", border: "none"}}></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12">
                <div  className="single-schedule last h-100">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content horarios">
                      <span>Encontranos</span>
                      <h4>Horarios de Atención</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          TUCUMÁN 1601 PB, Rosario
                        </li>
                        <li className="day">
                          lunes a jueves <span>14.00 - 20.00</span>
                        </li>
                        <li className="day">
                          viernes <span>9.00 - 14.00</span>
                        </li>
                        <li className="day mt-4">
                          GÁLVEZ 1078, Rosario
                        </li>
                        <li className="day">
                         lunes a viernes<span>9.00 - 19.00</span>
                        </li>
                      </ul>
                    </div>
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
