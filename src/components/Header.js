import React from "react";
import { HeaderContent } from "../styles/Header.style";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/36121-developer-at-work.json";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <HeaderContent>
      <section>
        <div className="sobre">
          <h1>Sobre</h1>
          <p>
            Meu nome é Carlos Eduardo, tenho 17 anos, comecei na área da
            programação aos 11 anos utilizando a linguagem python, mas o que me
            apaixonou foi o desenvolvimento web onde eu estou até hoje, no
            desenvolvimento web foi onde eu aprendi html, css, javascript e
            estou aprendendo react.js, next.js, node.js e mysql
          </p>
          <p>Número: 55 74 999016923</p>
          <p>Email: carloseduardolimabastosm@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/carlos-eduardo-lima-5638271ba/"
            target="_blank"
          >
            Linkedin
          </a>
          <a href="https://github.com/CarlosEduardoBastos" target="_blank">
            Github
          </a>
        </div>
        <div>
          <Lottie
            options={defaultOptions}
            height={400}
            width={520}
            title="Emad Moradian"
          />
        </div>
      </section>
    </HeaderContent>
  );
};

export default Header;
