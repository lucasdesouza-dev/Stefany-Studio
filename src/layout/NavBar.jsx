import "./NavBar.css";

import { BsList } from "react-icons/bs";
import logo from "../img/logo.png";
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
          <a href="#section-1">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
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
              <a href="#section-2">Quem Sou</a>
            </li>
            <li>
              <a href="#section-3">Especialidades</a>
            </li>
            <li>
              <a href="#section-4">Portfólio</a>
            </li>
            <li>
              <a href="#section-5">Cursos</a>
            </li>
            <li className="link-agendamento">
              <a href="https://wa.me/message/O2TJMR6VILACH1">
                Agende seu Horario
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
