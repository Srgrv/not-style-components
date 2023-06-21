import React from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

//styles
import style from "../styles/HeaderEl.module.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <a href="/" className={style.title}>
            Where is a country?
          </a>
          <div className={style.changeTheme} onClick={toggleTheme}>
            {theme === "light" ? <IoMoon size="14px" /> : <IoMoonOutline />}

            <span className={style.logo}>{theme} theme</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
