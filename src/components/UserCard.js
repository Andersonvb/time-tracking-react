import React from "react";
import "../stylesheets/UserCard.css";
import userImage from "../images/image-jeremy.png";

const UserCard = () => {
  return (
    <article className="user-card">
      <section className="user-card__section-1">
        <div className="user-section-1__img">
          <img src={userImage} alt="User" />
        </div>
        <div className="user-section-1__info">
          <span className="user-text">Report for</span>
          <span className="user-name">Jeremy Robson</span>
        </div>
      </section>

      <section className="user-card__section-2">
        <nav>
          <ul className="user-section-2__ul">
            <li><a>Daily</a></li>
            <li><a>Weekly</a></li>
            <li><a>Monthly</a></li>
          </ul>
        </nav>
      </section>
    </article>
  );
};

export default UserCard;
