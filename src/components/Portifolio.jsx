import "./Portifolio.css";
import Tarjeta from "./Tarjeta";

const Portifolio = ({ data }) => {
  return (
    <section id="section-4">
      <Tarjeta titulo="Portfólio" />
      <div className="portfolio">
        {data.map((item) => {
          const { id, name, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img
                  src={image}
                  alt="name"
                  loading="lazy"
                  width="700"
                  height="700"
                />
              </div>
              <div className="info">
                <span className="name">{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
