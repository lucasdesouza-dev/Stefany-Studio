import { useState } from "react";
import "./App.css";

import NavBar from "./layout/NavBar";
import Home from "./components/Home.";
import Sobre from "./components/Sobre";
import Agendamento from "./components/Agendamento";

import Especialidades from "./components/Especialidades";

function App() {
  const [] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Sobre />
      {/* <Agendamento /> */}
      <Especialidades />
    </div>
  );
}

export default App;
