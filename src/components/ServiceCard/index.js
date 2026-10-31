import Link from "next/link";
import Icon from "@/components/Icon";

export default function ServiceCard(props) {
  const { icon, title, desc } = props;

  return (
    <>
      <div className="single-service">
      <Icon className={`${icon ? icon : "icofont icofont-prescription"}`} />
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
