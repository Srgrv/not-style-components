import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//styles
import style from "../styles/Info.module.css";

//config
import { filterByCode } from "../config";

const Info = (props) => {
  const {
    name,
    flags,
    capital = [],
    population,
    region,
    subregion,
    tld = [],

    languages,
    borders,
  } = props;

  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders !== undefined) {
      axios.get(filterByCode(borders)).then(({ data }) => {
        setNeighbors(data.map((c) => c.name.common));
      });
    }
  }, [borders]);

  return (
    <section className={style.wrapper}>
      <img className={style.infoImg} src={flags.png} alt={flags.alt} />
      <div>
        <h1 className={style.infoTitle}>{name.common}</h1>
        <div className={style.listGroup}>
          <ul className={style.list}>
            <li className={style.listItem}>
              <b>Native Name:</b> {name.official}
            </li>

            <li className={style.listItem}>
              <b>Population:</b> {population}
            </li>

            <li className={style.listItem}>
              <b>Region:</b> {region}
            </li>
            <li className={style.listItem}>
              <b>Sub Region:</b> {subregion}
            </li>

            <li className={style.listItem}>
              <b>Capital:</b>{" "}
              {capital.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </li>
          </ul>
          <ul className={style.list}>
            <li className={style.listItem}>
              <b>Top Level Domain: </b> {tld[0]}
            </li>

            {/* <li className={style.listItem}>
              <b>Currency</b> {currencies.DZD.name}
            </li> */}

            {/* <li className={style.listItem}>
              <b>Languages: </b> {languages.ara}
            </li> */}
          </ul>
        </div>
        <div className={style.meta}>
          <b>Border Countries</b>
          {borders === undefined ? (
            <span>There is no border countries</span>
          ) : (
            <div className={style.tagGroup}>
              {neighbors.map((b) => (
                <Link to={`/country/${b}`} className={style.tag} key={b}>
                  {b}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Info;

//закончить последнюю страницу
