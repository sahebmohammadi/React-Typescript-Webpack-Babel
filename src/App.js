import React from "react";
import "./App.css";

import ReactImg from "./logo-og.png";

const App = () => {
  return (
    <div className="App">
      <h1>React App ! - {process.env.NODE_ENV}</h1>
      <h2>{process.env.NAME}</h2>
      <img src={ReactImg} alt="" />
    </div>
  );
};

export default App;
