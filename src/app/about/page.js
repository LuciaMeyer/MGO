import Breadcrumbs from "@/components/Breadcrumbs";
import AboutSection from "./AboutSection";
import Vission from "./Vission";
import Header from "@/components/Header/Header";
import { metadataDe } from "@/data/seo";

export const metadata = metadataDe("about");

export default function About() {
  return (
    <>
      <Header />
      <Breadcrumbs title="Nuestra Historia" menuText="Sobre Nosotros" />
      <AboutSection />
      <Vission />
    </>
  );
}
