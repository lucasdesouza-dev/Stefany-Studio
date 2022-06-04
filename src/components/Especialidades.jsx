import { useState } from "react";
import Card from "./Card";
import "./Especialidades.css";
import Tarjeta from "./Tarjeta";

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

      id: 2,
    },
  ];

  return (
    <section id="section-3">
      <Tarjeta titulo="Especialidades" />
      <div className="Especialidades">
        <Card especialidades={especialidades} />
      </div>
    </section>
  );
};

export default Especialidades;
