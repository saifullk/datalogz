import React from "react";
import "./index.css";
import MockApi from "./components/MockApi";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Dog Image Grid</h1>
      <MockApi />
    </div>
  );
};

export default App;
