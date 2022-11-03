import React from "react";
import "../stylesheets/Card.css";
import Ellipsis from "../images/icon-ellipsis.svg";
import Work from "../images/icon-work.svg";
import Play from "../images/icon-play.svg";
import Study from "../images/icon-study.svg";
import Exercise from "../images/icon-exercise.svg";
import Social from "../images/icon-social.svg";
import SelfCare from "../images/icon-self-care.svg";

const Card = ({ color, title, time, date }) => {
  let icon;

  if (title === "Work") {
    icon = Work;
  } else if (title === "Play") {
    icon = Play;
  } else if (title === "Study") {
    icon = Study;
  } else if (title === "Exercise") {
    icon = Exercise;
  } else if (title === "Social") {
    icon = Social;
  } else if (title === "Self Care") {
    icon = SelfCare;
  }

  return (
    <article className="card">
      <section className={color + " card__bg"}>
        <img src={icon} alt="Work" />
      </section>

      <section className="card__info">
        <div className="info__section-1">
          <span>{title}</span>
          <img src={Ellipsis} alt="Ellipsis" />
        </div>
        <div className="info__section-2">
          <span className="section-2__time">{time}</span>
          <span className="section-2__date">{date}</span>
        </div>
      </section>
    </article>
  );
};

export default Card;
