import { consultorioCentro, consultorioAbasto, consultorios } from "@/data/consultorios";
import Icon from "@/components/Icon";

export default function Schedule() {
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
                      <Icon className="fa fa-map-marker" />
                    </div>
                    <div className="single-content">
                      <span>{consultorioCentro.zona}</span>
                      <h4>{consultorioCentro.calle}</h4>
                      <p style={{ margin: "0.5rem 0" }}>
                        Solicitar turnos al teléfono fijo: {consultorioCentro.telefono}
                      </p>
                    </div>
                    <iframe
                      src={consultorioCentro.mapaEmbed}
                      title={`Mapa de ${consultorioCentro.nombre} - ${consultorioCentro.calle}, ${consultorioCentro.localidad}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{width: "100%", border: "none"}}
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <Icon className="fa fa-map-marker" />
                    </div>
                    <div className="single-content">
                      <span>{consultorioAbasto.zona}</span>
                      <h4>{consultorioAbasto.calle}</h4>
                      <p style={{ margin: "0.5rem 0" }}>
                        Solicitar turnos al teléfono fijo: {consultorioAbasto.telefono}
                      </p>
                      <iframe
                        src={consultorioAbasto.mapaEmbed}
                        title={`Mapa de ${consultorioAbasto.nombre} - ${consultorioAbasto.calle}, ${consultorioAbasto.localidad}`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{width: "100%", border: "none"}}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12">
                <div  className="single-schedule last h-100">
                  <div className="inner">
                    <div className="icon">
                      <Icon className="icofont-ui-clock" />
                    </div>
                    <div className="single-content horarios">
                      <span>Encontranos</span>
                      <h4>Horarios de Atención</h4>
                      <ul className="time-sidual">
                        {consultorios.map((sede) => (
                          <Horarios key={sede.id} sede={sede} />
                        ))}
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

// La primera sede abre la lista sin margen superior y la siguiente lo lleva,
// tal como estaba escrito a mano antes.
function Horarios({ sede }) {
  return (
    <>
      <li className={`day${sede.id === consultorios[0].id ? "" : " mt-4"}`}>
        {sede.calle.toUpperCase()}, {sede.localidad}
      </li>
      {sede.horarios.map((horario) => (
        <li key={horario.dias} className="day">
          {horario.dias} <span><b>{horario.desde}</b> hs. - <b>{horario.hasta}</b> hs.</span>
        </li>
      ))}
    </>
  );
}
