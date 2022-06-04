import "./Agendamento.css";
import WhatsappIcon from "../img/whatsapp-icon.svg";
const contato = () => {
  return (
    <div className="agendamento">
      <a href="https://wa.me/5534992340962">
        <img src={WhatsappIcon} alt="whatsapp-icon" />
      </a>
    </div>
  );
};

export default contato;
