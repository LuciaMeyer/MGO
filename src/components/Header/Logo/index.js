import Image from "next/image";
import Link from "next/link";

// Theme Logo
import ThemeLogo from "../../../../public/img/logo_mgo.webp";

export default function Logo() {
  return (
    <>
      <div className="logo" >
        <Link href="/">
          <Image src={ThemeLogo} alt="#" width={220} height={100} />
        </Link>
      </div>
    </>
  );
}
