import "./Card.css";
const Card = ({ especialidades }) => {
  // console.log(especialidades.especialidade);
  return (
    <div className="especialidade">
      {especialidades &&
        especialidades.map((especialidade) => (
          <div className="card" key={especialidade.id}>
            <h1 className="titulo">{especialidade.titulo}</h1>
            <h3 className="sub-titulo">{especialidade.subTitulo}</h3>
            <p className="descricao">{especialidade.descricao}</p>
          </div>
        ))}
    </div>
  );
};

export default Card;
