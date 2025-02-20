"use client";

import { useState } from "react";

export default function Vission() {
  const [vissionData, setvissionData] = useState([
    {
      id: "item1",
      icon: "icofont-tick-mark",
      title: "Nuestra Misión",
      desc: "Brindar atención odontológica integral con un enfoque preventivo y personalizado, asegurando la salud y bienestar bucal de nuestros pacientes.",
    },
    {
      id: "item2",
      icon: "icofont-tick-mark",
      title: "Nuestra Visión",
      desc: "Ser un consultorio de referencia en odontología, reconocido por nuestra calidad, innovación y trato humano.",
    },
    {
      id: "item3",
      icon: "icofont-tick-mark",
      title: "Nuestros Valores",
      desc: "Compromiso, ética, calidad, confianza y calidez en cada atención.",
    },
  ]);

  return (
    <>
      <section className="our-vision-area ptb-100 pt-0">
        <div className="container">
          <div className="row">
            {vissionData.map((items) => (
              <div className="col-lg-4 col-md-6 col-12" key={items.id}>
                <div className="single-vision-box">
                  <div className="icon">
                    <i className={items.icon}></i>
                  </div>
                  <h3>{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
