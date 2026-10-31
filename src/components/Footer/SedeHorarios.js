// Reemplaza a OpenHour.js y OpenHour2.js, que eran el mismo componente
// duplicado con los datos de cada sede escritos a mano.

export default function SedeHorarios({ sede }) {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer">
        <h2>{sede.nombre}</h2>
        <ul className="time-sidual">
          <li className="day">
            {sede.calle}, {sede.localidad}
          </li>
          <li className="day">Teléfono fijo: {sede.telefono}</li>
          {sede.horarios.map((horario) => (
            <li key={horario.dias} className="day">
              {horario.dias} de {horario.desde} hs. a {horario.hasta} hs.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
