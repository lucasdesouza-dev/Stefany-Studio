import { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./components/Home.";
import Sobre from "./components/Sobre";

import Especialidades from "./components/Especialidades";
import Portifolio from "./components/Portifolio";
import Mapa from "./components/Mapa";

function App() {
  const [dadoPortifolio, setDadoPortifolio] = useState([]);
  const [dadoEspecialidades, setDadoEspecialidades] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lucashenriquesouza/Stefany-Studio/master/public/dados.json"
    )
      .then((response) => response.json())
      .then((res) => {
        const { portifolio, especialidades } = res;
        setDadoEspecialidades(especialidades);
        setDadoPortifolio(portifolio);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Sobre />
      {/* <Agendamento /> */}
      <Especialidades data={dadoEspecialidades} />
      <Portifolio data={dadoPortifolio} />
      <Mapa />
      <Footer />
    </div>
  );
}

export default App;
