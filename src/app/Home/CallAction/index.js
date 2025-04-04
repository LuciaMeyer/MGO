import Link from "next/link"
import SectionImg from "../../../../public/img/section-img-blanco.webp"
import Image from "next/image";

export default function CallAction() {
  return (
    <>
      <section className="call-action overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>¿Necesitás una consulta? <br/> llamanos para agendar un turno</h2>
                <Image className="mt-3" src={SectionImg} alt="#" width={48} height={24} />
                <div className="button mt-4">
                  <Link href="/contact" className="btn">
                    Contactanos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
