import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";

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
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Implantes Dentales"
                desc="Tenemos la mejor solución para la pérdida de tus dientes, de una forma sencilla, segura y definitiva."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Ortodoncia y Ortopedia"
                desc="Corregimos la posición de los dientes, mejorando la estética y la función de tu boca. Desde alineadores invisibles hasta brackets tradicionales."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Estética y Blanqueamiento"
                desc="Devolvemos tu sonrisa. Blanqueamientos y carillas para tener dientes más blancos y brillantes."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Prótesis"
                desc="Recuperamos la funcionalidad y la estética de tu boca."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Periodoncia"
                desc="Mantenemos las encías sanas y ayudamos a prevenir la gingivitis y la periodontitis."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Endodoncia Mecanizada"
                desc="Con tratamientos indoloros, buscamos conservar tus dientes."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Odontopediatría"
                desc="Tratamos las distintas enfermedades bucodentales en niños, haciendo hincapié en la prevención y motivación."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
