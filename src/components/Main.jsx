import React from "react";

//styls
import style from "../styles/Main.module.css";

const Main = ({ children }) => {
  return (
    <main className={style.main}>
      <div className={style.container}>{children}</div>
    </main>
  );
};

export default Main;
