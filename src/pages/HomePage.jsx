import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";

//components
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";

import { ALL_COUNTRIES } from "../config";

const HomePage = ({ setCountries, countries }) => {
  const [filterCountries, setFilterCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterCountries(data);
  };

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filterCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return <Card key={c.name.common} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
