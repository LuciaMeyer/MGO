import SedeHorarios from "./SedeHorarios"
import Links from "./Links"
import Logo from "../../../public/img/logo-blanco.webp"
import Image from "next/image";
import Link from "next/link";
import { consultorios } from "@/data/consultorios";

export default function Footer() {
  const linkedin = 'https://www.linkedin.com/in/lucia-meyer-65633a143/'
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <Links />
              {consultorios.map((sede) => (
                <SedeHorarios key={sede.id} sede={sede} />
              ))}
              <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <Image src={Logo} alt="#" width={200} height={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-content">
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              <span> © LM Dev & Design</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
