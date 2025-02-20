import HeaderInner from "./HeaderInner/InnerOne";
import SectionLoader from "@/components/SectionLoader";


export default function Header() {
  return (
    <>
     <SectionLoader />
      <header className="header">
        <HeaderInner />
      </header>
    </>
  );
}
