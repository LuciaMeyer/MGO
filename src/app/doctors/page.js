import Breadcrumbs from "@/components/Breadcrumbs";
import TeamCard from "@/components/TeamCard";
import SectionLoader from "@/components/SectionLoader";

import TeamImg1 from "../../../public/img/team1.png";
import TeamImg2 from "../../../public/img/team2.png";

import Header from "@/components/Header/Header";

export default function Doctors() {
  return (
    <>
      <SectionLoader />
      <Header />

      <Breadcrumbs title="Conocenos" menuText="Profesionales" />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg1}
                name="Florencia Meyer"
                desgination="Odontopediatra especialista en ortodoncia y ortopedia funcional de los maxilares."
              />
            </div>
            <div className="col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg2}
                name="Mariano Gulisano"
                desgination="Odontólogo especialista en prótesis dentobucomaxilar e implantes, y docente de la Universidad Nacional de Rosario."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
