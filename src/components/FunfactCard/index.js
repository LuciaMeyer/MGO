"use client";

import CountUp from "react-countup";
import Icon from "@/components/Icon";

export default function FunfactCard(props) {
  const { icon, number, desc } = props;

  return (
    <>
      <div className="single-fun">
        <Icon className={icon ? icon : "icofont icofont-home"} />
        <div className="content">
          <span className="counter">
            <CountUp end={number ? number : "3468"} delay={1} enableScrollSpy />
          </span>
          <p>{desc ? desc : "Hospital Rooms"}</p>
        </div>
      </div>
    </>
  );
}
