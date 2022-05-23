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
          <img src={logo} className="App-logo" alt="logo" />

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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Quem Sou</a>
            </li>
            <li>
              <a href="#">Portfólio</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
