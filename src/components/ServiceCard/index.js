import Link from "next/link";

export default function ServiceCard(props) {
  const { icon, title, desc } = props;

  return (
    <>
      <div className="single-service">
      <i className={`${icon ? icon : "icofont icofont-prescription"}`}></i>
        <h4>
          <Link href="/service">
            {title ? title : "General Treatment "}
          </Link>
        </h4>
        <p>
          {desc
            ? desc
            : ""}
        </p>
      </div>
    </>
  );
}
