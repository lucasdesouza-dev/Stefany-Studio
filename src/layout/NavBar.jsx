import "./NavBar.css";

import { BsList } from "react-icons/bs";
import logo from "../img/logo.svg";
import { useState } from "react";

const navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo-toggle">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <input
            onChange={handleToggle}
            value={toggle}
            type="checkbox"
            id="toggle"
          />
          <label htmlFor="toggle">
            <i className="icon">
              <BsList />
            </i>
          </label>
        </div>

        <div className={`menu ${toggle ? "mostrar" : ""}`}>
          <ul className="list">
            <li>
              <a href="#section-1">Home</a>
            </li>
            <li>
              <a href="#section-2">Quem Sou</a>
            </li>
            <li>
              <a href="#section-3">Especialidades</a>
            </li>
            <li>
              <a href="#section-4">Portfólio</a>
            </li>
            <li className="link-agendamento">
              <a href="https://wa.me/5534992340962">Agende seu Horario</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
