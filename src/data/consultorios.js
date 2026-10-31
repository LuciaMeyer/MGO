// Fuente única de los datos de las sedes. Antes estaban repetidos en
// Home/Schedule, contact/page, Footer/OpenHour y Footer/OpenHour2, y ya habían
// empezado a divergir entre sí.

export const consultorios = [
  {
    id: "centro",
    nombre: "Consultorio Centro",
    zona: "Consultorio Centro - Rosario",
    calle: "Tucumán 1601 PB",
    direccionCompleta: "Tucumán 1601 PB, Rosario.",
    localidad: "Rosario",
    provincia: "Santa Fe",
    codigoPostal: "S2000AMO",
    pais: "AR",
    geo: { lat: -32.9406113, lng: -60.6440938 },
    telefono: "(0341) 4252429",
    perfilGoogle: "https://share.google/tjmQflY8mrffZh2qz",
    telefonoE164: "+543414252429",
    horarios: [
      { dias: "lunes a jueves", desde: "12.00", hasta: "20.00" },
      { dias: "viernes", desde: "9.00", hasta: "17.00" },
    ],
    // Horarios en formato schema.org, para el JSON-LD de negocio local.
    horariosSchema: [
      { dias: ["Monday", "Tuesday", "Wednesday", "Thursday"], abre: "12:00", cierra: "20:00" },
      { dias: ["Friday"], abre: "09:00", cierra: "17:00" },
    ],
    mapaEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.393786091459!2d-60.6440938!3d-32.94061129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3c69f36cad%3A0x6468597c08bd9334!2sTucum%C3%A1n%201601%2C%20S2000AMO%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1741387881630!5m2!1ses-419!2sar",
  },
  {
    id: "abasto",
    nombre: "Consultorio Abasto",
    zona: "Consultorio Abasto - Rosario",
    calle: "Gálvez 1078",
    direccionCompleta: "Gálvez 1078, Rosario.",
    localidad: "Rosario",
    provincia: "Santa Fe",
    codigoPostal: "S2001NWB",
    pais: "AR",
    geo: { lat: -32.9687448, lng: -60.6433548 },
    telefono: "(0341) 6799454",
    perfilGoogle: "https://share.google/j00o6gmjDjuUN08nL",
    telefonoE164: "+543416799454",
    horarios: [{ dias: "lunes a viernes", desde: "9.00", hasta: "19.00" }],
    horariosSchema: [
      {
        dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        abre: "09:00",
        cierra: "19:00",
      },
    ],
    mapaEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.328089546718!2d-60.6433548!3d-32.968744799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aba68ad67f75%3A0x108176e22b73c5ab!2sG%C3%A1lvez%201078%2C%20S2001NWB%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1739987304904!5m2!1ses-419!2sar",
  },
];

export const consultorioCentro = consultorios[0];
export const consultorioAbasto = consultorios[1];
