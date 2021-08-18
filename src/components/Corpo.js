import React from "react";
import { Content } from "../styles/Corpo.style";
import ControlledCarousel from "./ControlledCarousel";

const Corpo = () => {
  return (
    <Content>
      <section className="imagem_corpo">
        <h1>Projeto</h1>
        <ControlledCarousel />
      </section>
    </Content>
  );
};

export default Corpo;
