import Breadcrumbs from "@/components/Breadcrumbs";
import AboutSection from "./AboutSection";
import Vission from "./Vission";
import Header from "@/components/Header/Header";
import SectionLoader from "@/components/SectionLoader";

export default function About() {
  return (
    <>
      <SectionLoader />
      <Header />
      <Breadcrumbs title="Nuestra Historia" menuText="Sobre Nosotros" />
      <AboutSection />
      <Vission />
    </>
  );
}
