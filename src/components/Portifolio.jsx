import "./Portifolio.css";
import Tarjeta from "./Tarjeta";

const Portifolio = ({ data }) => {
  return (
    <section id="section-4">
      <Tarjeta titulo="Portfólio" />
      <div className="container-portfolio">
        <div className="portifolio">
          {data.map((item) => {
            const { id, name, image } = item;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img
                    src={image}
                    alt="name"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
