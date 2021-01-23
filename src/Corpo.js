import React from 'react'
import Lottie from 'react-lottie';
import animationData from './assets/lotties/43885-laptop-working.json'

const Corpo = () => {
    const defaultOptions = ({
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      })
    return (
        <section className="corpo" id="sobre">
        <div className="campo_texto">
          <h1>Sobre</h1>
          <p>
            Meu nome é Carlos Eduardo, tenho 17 anos, comecei na área da programação aos 11 anos utilizando a linguagem python,
            mas o que me apaixonou foi o desenvolvimento web onde eu estou até hoje, no desenvolvimento web foi onde eu aprendi
            html, css, javascript e estou aprendendo react.js e next.js.
          </p>
        </div>
        <div className="lottie-config">
          <Lottie options={defaultOptions} height={400} width={320} title="Hadi Firmansyah"/>
        </div>
      </section>
    )
}

export default Corpo
