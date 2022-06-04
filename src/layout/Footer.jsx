import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="redes-footer">
        <div className="logo-footer">
          <h1>Stefany Studio</h1>

          <ul className="redes">
            <li>
              <a href="https://www.facebook.com/Studiostefanyresende">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/stefanyresende_studio/">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy-footer">
        <p>©2022 Todos os direitos reservados.</p>
        <p>
          Produzido por{" "}
          <a href="https://www.instagram.com/luccashsouza/">LUCAS</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
