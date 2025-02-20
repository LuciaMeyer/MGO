import FeatureCard from "@/components/FeatureCard";
import SectionHead from "@/components/SectionHead";

export default function Features(props) {
  const { sectionName } = props;

  return (
    <>
      <section className={sectionName ? sectionName : "Feautes section"}>
        <div className="container cont1">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Estamos listos para asistirte, a vos y a tu familia."
                desc="Atendemos a pacientes de todas las edades, ofreciendo tratamientos odontológicos que abarcan desde opciones estéticas hasta procedimientos complejos, siempre comprometidos con el cuidado de tu sonrisa."
              />
            </div>
          </div>
          <div className="row mt-lg-5 mt-3">
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-kid"
                title="Niños"
                desc="Cuidamos la salud bucal de los más pequeños con un enfoque preventivo y amable."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-business-man"
                title="Adultos"
                desc="Tratamientos personalizados para mantener y mejorar tu sonrisa en cada etapa de la vida."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features last"
                icon="icofont icofont-tick-mark"
                title="Adultos Mayores"
                desc="Soluciones odontológicas adaptadas para una boca sana y funcional a cualquier edad."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
