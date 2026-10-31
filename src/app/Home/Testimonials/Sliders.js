"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonios } from "@/data/testimonios";

export default function Sliders() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="testimonial-slider"
        breakpoints={{
          360: {
            slidesPerView: 1,
            loop: false,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1170: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonios.map((testimonio) => (
          <SwiperSlide className="single-testimonial" key={testimonio.id}>
            {testimonio.foto && (
              <Image
                src={testimonio.foto}
                alt={testimonio.nombre}
                width={53}
                height={53}
              />
            )}
            <p>{testimonio.texto}</p>
            <h4 className="name">{testimonio.nombre}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
