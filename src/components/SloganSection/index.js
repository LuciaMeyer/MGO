import Image from "next/image";

import img from "../../../public/img/logo_mgo.webp";

export default function SloganSection() {

  return (
        <>
          <div className="section-title mt-4 d-flex flex-column justify-content-center align-items-center" style={{height: "50vh", backgroundColor: "#D9DEE4"}}>
            <h5 style={{ opacity: "0.7" }}>
              Más que odontología, <br/> un compromiso con tu bienestar y tu sonrisa.
            </h5>
            <Image className="mt-5" src={img} alt="#" width={200} height={100} />
          </div>
        </>
  );
}
