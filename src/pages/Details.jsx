import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { searchByCountry } from "../config";

//styles
import style from "../styles/Details.module.css";

//components
import Info from "../components/Info";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    axios.get(searchByCountry(id)).then(({ data }) => setCountry(data[0]));
  }, [id]);

  return (
    <div>
      <button className={style.button} onClick={goBack}>
        <IoArrowBack /> Back
      </button>
      {country && <Info {...country} />}
    </div>
  );
};

export default Details;
