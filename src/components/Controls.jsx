import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

//components
import Search from "./Search";

//style
import style from "../styles/Controls.module.css";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";

    onSearch(search, regionValue);

    //eslint-disable-next-value
  }, [search, region]);

  return (
    <div className={style.controls}>
      <Search search={search} setSearch={setSearch} />
      <Select
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--colors-ui-base)",
            color: "var(--colors-text)",
            borderRadius: "var(--radii)",
            padding: "0.25rem",
            border: "none",
            // boxShadow: "var(--shadow)",
            height: "50px",
            width: "200px",
            borderRadius: "var(--radii)",
            fontFamily: "var(--family)",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            cursor: "pointer",
            color: "var(--colors-text)",
            backgroundColor: state.isSelected
              ? "var(--colors-bg)"
              : "var(--colors-ui-base)",
          }),
        }}
      />
    </div>
  );
};

export default Controls;
