import FunfactCard from "@/components/FunfactCard";

export default function Funfact() {
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-home"
                number="2"
                desc="Clínicas Odontológicas"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-user-alt-3"
                number="6"
                desc="Odontólogos Especialistas"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont-simple-smile"
                number="2537"
                desc="Pacientes Felices"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-table"
                number="15"
                desc="Años de experiencia"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
