import SectionHead from "@/components/SectionHead";
import SectionImg from "../../../../public/img/section-img-blanco.webp";
import Sliders from "./Sliders";
import { testimonios } from "@/data/testimonios";

// Sección preparada pero inactiva: mientras no haya testimonios reales en
// src/data/testimonios.js no renderiza nada, así no puede quedar publicada
// con contenido de relleno.
export default function Testimonial() {
  if (testimonios.length === 0) return null;

  return (
    <>
      <section className="section testimonials overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Qué opinan nuestros pacientes"
                img={SectionImg}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-12">
              <Sliders />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
