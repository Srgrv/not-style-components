import React from "react";
import { IoSearch } from "react-icons/io5";

//styles
import style from "../styles/Search.module.css";

const Search = ({ search, setSearch }) => {
  return (
    <label className={style.search}>
      <IoSearch />
      <input
        className={style.input}
        type="search"
        placeholder="Search for a country"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </label>
  );
};

export default Search;
