import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header/Header";
import SectionLoader from "@/components/SectionLoader";


export default function Service() {
  return (
    <>
      <SectionLoader />
      <Header />

      <Breadcrumbs title="Tratamientos para tu salud bucal" menuText="Tratamientos" />

      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Implantes dentales"
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
                title="Endodoncia"
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
