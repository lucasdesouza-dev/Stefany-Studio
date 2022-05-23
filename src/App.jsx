import { useState } from "react";

import "./App.css";
import Home from "./components/Home.";
import Sobre from "./components/Sobre";
import NavBar from "./layout/NavBar";

function App() {
  const [] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Sobre />
    </div>
  );
}

export default App;
