import React from 'react'
import imagemSite from './img/site.png'
const Informacao = () => {
    return (
        <section className="informacao" id="informacao">
            <h1>Aqui estão algumas tecnologia que eu estudei</h1>
            <div className="corpo-info">
                <div>
                    <h2 className="html-info">html <small>4 a 5 anos</small></h2>
                    <h2 className="css-info">css <small>4 a 5 anos</small></h2>
                    <h2 className="js-info">javascript <small>2 a 3 anos</small></h2>
                    <h2 className="react-info">react.js <small>1 a 2 anos</small></h2>
                    <h2 className="next-info">next.js <small>2 a 3 meses</small></h2>
                    <h2 className="node-info">node.js <small>3 a 4 meses</small></h2>
                    <h2 className="mysql-info">mysql <small>3 a 4 meses</small></h2>
                </div>
            </div>
            <div className="projetos">
                <h1>Projetos criados</h1>
                <a href="http://carloseduardobastos.github.io/restaurante" className="link-site" target="_blank">Restaurante</a>
                <img src={imagemSite} alt="site" className="foto-site"/>
            </div>
            <div className="footer">
                <h1>Contato</h1>
                <a href="https://github.com/CarlosEduardoBastos" className="links-footer" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/carlos-eduardo-lima-5638271ba/" className="links-footer" target="_blank">Linkedin</a>
                <h3>Número: (55) 74 999449063</h3>
                <h3>E-mail: carloseduardolimabastosm@gmail.com</h3>
            </div>
        </section>
    )
}

export default Informacao
