import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//styles
import "./App.css";

//components
import Header from "./components/Header";
import Main from "./components/Main";

//pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";

const App = () => {
  const [countries, setCountries] = useState([]);
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:id" element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
