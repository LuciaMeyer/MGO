import Header from "@/components/Header/Header";
import CallAction from "./Home/CallAction";
import Features from "./Home/Features";
import Funfact from "./Home/Funfact";
import Hero from "./Home/Hero";
import Schedule from "./Home/Schedule";
import Services from "./Home/Services";
// import Testimonial from "./Home/Testimonials";
import WhyChoose from "./Home/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Schedule />
      <Features />
      <Funfact />
      <WhyChoose />
      <CallAction />
      <Services />
      {/* <Testimonial /> */}
    </>
  );
}
