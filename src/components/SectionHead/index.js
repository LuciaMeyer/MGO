import Image from "next/image";

import SectionImg from "../../../public/img/section-img.png";

export default function SectionHead(props) {
  const { title, img, desc } = props;

  return (
    <>
      <div className="section-title">
        <h2>
          {title ? title : "Estamos listos para asistirte a vos y a tu familia."}
        </h2>
        <Image className="mb-4" src={img ? img : SectionImg} alt="#" width={48} height={24} />
        <p>{desc ? desc : ""}</p>
      </div>
    </>
  );
}
