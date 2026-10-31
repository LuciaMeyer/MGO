import Icon from "@/components/Icon";

export default function FeatureCard(props) {
  const { cardClass, icon, title, desc } = props;

  return (
    <>
      <div className={cardClass ? cardClass : "single-features"}>
        <div className="signle-icon">
          <Icon className={icon ? icon : "icofont icofont-ambulance-cross"} />
        </div>
        <h3>{title ? title : "Emergency Help"}</h3>
        <p>
          {desc
            ? desc
            : "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."}
        </p>
      </div>
    </>
  );
}
