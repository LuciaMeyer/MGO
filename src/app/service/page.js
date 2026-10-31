import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header/Header";
import { tratamientos } from "@/data/tratamientos";
import { metadataDe } from "@/data/seo";

export const metadata = metadataDe("service");

export default function Service() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Tratamientos para tu salud bucal" menuText="Tratamientos" />

      <section className="services section">
        <div className="container">
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
