"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Slice1 from "../../../../public/img/slice-1.png";
import Slice2 from "../../../../public/img/slice-2.png";
import Slice3 from "../../../../public/img/slice-3.png";

export default function Sliders(props) {
  const { sectionName } = props;

  const [heroSliders, setheroSliders] = useState([
    {
      id: "s1",
      bgImg: Slice1,
      title:
      "Excelencia en <span>Odontología</span>",
      subTitle:
        "Nos enfocamos en brindarte atención personalizada con profesionales altamente capacitados, asegurando tratamientos efectivos para tu salud dental.",
      button: {
        text: "Conocenos",
        link: "/about",
      },
    },
    {
      id: "s2",
      bgImg: Slice2,
      title:
      "Expertos en cada <span>Especialidad</span>",
      subTitle:
        "Contamos con un equipo de expertos en odontología, comprometidos con la excelencia el bienestar de nuestros pacientes y un servicio personalizado.",
      button: {
        text: "Profesionales",
        link: "/doctors",
      },
    },
    {
      id: "s3",
      bgImg: Slice3,
      title:
      "Tratamientos de <span>Calidad</span><br/>",
      subTitle:
        "Desde limpiezas preventivas hasta tratamientos avanzados, nuestro equipo experto ofrece cuidado dental completo.",
      button: {
        text: "Tratamientos",
        link: "/service",
      },
    },
  ]);

  return (
    <>
      {/* <!-- Slider Area --> */}
      <section className={sectionName ? sectionName : "slider"}>
        <Swiper
          // autoplay={{ delay: 7000 }}
          // modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="hero-slider"
        >
          {heroSliders.map((singleSlider) => (
            <SwiperSlide
              className={`${singleSlider.id === 's3' ? 's3' : ''} single-slider`}
              style={{
                backgroundImage: `url(${singleSlider.bgImg.src})`,
              }}
              key={singleSlider.id}
            >
              <div className="container mt-lg-0 mt-5">
                <div className="row">
                  <div className="col-lg-7 col-12">
                    <div className="text">
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: singleSlider.title,
                        }}
                      ></h1>
                      <p className=""
                        dangerouslySetInnerHTML={{
                          __html: singleSlider.subTitle,
                        }}
                      ></p>
                      {/* <!-- Slider Button --> */}
                      <div className="button mt-5">
                        <a
                          href={singleSlider?.button.link}
                          className="btn primary"
                        >
                          {singleSlider?.button.text}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </section>
    </>
  );
}
