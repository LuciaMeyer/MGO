import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import { tratamientos } from "@/data/tratamientos";

export default function Services() {
  return (
    <>
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Ofrecemos diferentes tratamientos para tu salud bucal"
              />
            </div>
          </div>
          <div className="row">
            {tratamientos.map((tratamiento) => (
              <div key={tratamiento.id} className="col-lg-4 col-md-6 col-12">
                <ServiceCard
                  icon={tratamiento.icon}
                  title={tratamiento.title}
                  desc={tratamiento.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
