import { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./components/Home.";
import Sobre from "./components/Sobre";
import Agendamento from "./components/Agendamento";

import Especialidades from "./components/Especialidades";
import Portifolio from "./components/Portifolio";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./src/DB/portifolio.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Sobre />
      {/* <Agendamento /> */}
      <Especialidades />
      <Portifolio data={data} />
      <Footer />
    </div>
  );
}

export default App;
