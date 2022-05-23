import { useState } from "react";

import "./App.css";
import Home from "./components/Home.";
import NavBar from "./layout/NavBar";

function App() {
  const [] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
