import React from "react";
import { Link } from "react-router-dom";

//styles
import style from "../styles/Card.module.css";

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Link to={`country/${name}`} className={style.wrapper}>
      <img className={style.cardImage} src={img} alt={name} />
      <div className={style.cardBody}>
        <h3 className={style.cardTitle}>{name}</h3>
        <ul className={style.cardList}>
          {info.map((item) => (
            <li className={style.cardListItem} key={item.title}>
              <b>{item.title}:</b> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Card;
