import React from "react";

//styles
import "./App.css";

//components
import Header from "./components/Header";
import Controls from "./components/Controls";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Controls />
      </Main>
    </div>
  );
};

export default App;
