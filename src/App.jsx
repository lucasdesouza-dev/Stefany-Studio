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
  // const [data, setData] = useState([
  //   {
  //     id: "2",
  //     name: "",
  //     image: "./assets/img2.jpeg",
  //   },

  //   {
  //     id: "3",
  //     name: "",
  //     image: "./assets/img3.jpeg",
  //   },
  //   {
  //     id: "4",
  //     name: "",
  //     image: "./assets/img4.jpeg",
  //   },
  //   {
  //     id: "5",
  //     name: "",
  //     image: "./assets/img5.jpeg",
  //   },
  //   {
  //     id: "6",
  //     name: "",
  //     image: "./assets/img6.jpeg",
  //   },
  //   {
  //     id: "7",
  //     name: "",
  //     image: "./assets/img7.jpeg",
  //   },
  //   {
  //     id: "8",
  //     name: "",
  //     image: "./assets/img8.jpeg",
  //   },
  //   {
  //     id: "9",
  //     name: "",
  //     image: "./assets/img9.jpeg",
  //   },
  //   {
  //     id: "10",
  //     name: "",
  //     image: "./assets/img10.jpeg",
  //   },
  //   {
  //     id: "11",
  //     name: "",
  //     image: "./assets/img11.jpeg",
  //   },
  //   {
  //     id: "12",
  //     name: "",
  //     image: "./assets/img12.jpeg",
  //   },
  //   {
  //     id: "13",
  //     name: "",
  //     image: "./assets/img13.jpeg",
  //   },
  //   {
  //     id: "14",
  //     name: "",
  //     image: "./assets/img14.jpeg",
  //   },
  //   {
  //     id: "15",
  //     name: "",
  //     image: "./assets/img15.jpeg",
  //   },

  //   {
  //     id: "16",
  //     name: "",
  //     image: "./assets/img16.jpeg",
  //   },
  //   {
  //     id: "17",
  //     name: "",
  //     image: "./assets/img17.jpeg",
  //   },
  //   {
  //     id: "18",
  //     name: "",
  //     image: "./assets/img18.jpeg",
  //   },
  // ]);

  useEffect(() => {
    fetch("http://localhost:3000/portifolio.json", {
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
