import Image from "next/image";

import img from "../../../public/img/logo_mgo.webp";

export default function SloganSection() {

  return (
        <>
          {/* mb-0: .section-title lleva margin-bottom entre 768 y 991px, que
              dejaba una franja blanca entre este bloque y el footer. */}
          <div className="section-title mt-4 mb-0 d-flex flex-column justify-content-center align-items-center" style={{height: "50vh", backgroundColor: "#D9DEE4"}}>
            <h5 style={{ opacity: "0.7" }}>
              Más que odontología, <br/> un compromiso con tu bienestar y tu sonrisa.
            </h5>
            <Image className="mt-5" src={img} alt="#" width={200} height={100} />
          </div>
        </>
  );
}
