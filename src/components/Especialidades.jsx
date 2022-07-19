import { useState } from "react";
import Card from "./Card";
import "./Especialidades.css";
import Tarjeta from "./Tarjeta";

const Especialidades = ({ data }) => {
  return (
    <section id="section-3">
      <Tarjeta titulo="Especialidades" />
      <div className="Especialidades">
        <Card especialidades={data} />
      </div>
    </section>
  );
};

export default Especialidades;
