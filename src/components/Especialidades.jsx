import { useState } from "react";
import Card from "./Card";
import "./Especialidades.css";

const Especialidades = () => {
  const especialidades = [
    {
      titulo: "Design de Sobrancelhas",
      subTitulo: "As sobrancelhas e seu papel na expressão do olhar",
      descricao:
        "O design de sobrancelha é feito para alinhar os fios, tendo base nas técnicas de visagismo, onde é avaliado as características do formato do rosto, simetria, é feito medidas precisas da face, onde se chega ao modelo ideal para cada tipo de rosto.",

      id: 1,
    },
    {
      titulo: "Design de Sobrancelhas",
      subTitulo: "As sobrancelhas e seu papel na expressão do olhar",
      descricao:
        "O design de sobrancelha é feito para alinhar os fios, tendo base nas técnicas de visagismo, onde é avaliado as características do formato do rosto, simetria, é feito medidas precisas da face, onde se chega ao modelo ideal para cada tipo de rosto.",

      id: 1,
    },
  ];

  return (
    <div className="Especialidades">
      <h1>Especialidades</h1>
      <Card especialidades={especialidades} />
    </div>
  );
};

export default Especialidades;
