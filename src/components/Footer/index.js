import OpenHour from "./OpenHour"
import OpenHour2 from "./OpenHour2"
import Links from "./Links"
import Logo from "../../../public/img/logo-blanco.png"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const linkedin = 'https://www.linkedin.com/in/lucia-meyer-65633a143/'
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <Links />
              <OpenHour2 />
              <OpenHour />
              <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <Image src={Logo} alt="#" width={200} height={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-content">
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              <span> © Lucía Meyer 2025</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
