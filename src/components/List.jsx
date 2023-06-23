import React from "react";

//styles
import style from "../styles/List.module.css";

const List = ({ children }) => {
  return <section className={style.wrapper}>{children}</section>;
};

export default List;
