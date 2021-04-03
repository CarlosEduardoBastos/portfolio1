import React from 'react'
import imagemSite from './img/site.png'
import { CorpoInfomacao, InformacaoConteiner, TextHtml, TituloInformacao, Small, TextCss, TextJs, TextReact, TextNext, TextNode, TextMysql, ProjetoConteiner, TituloProjeto, LinkProjeto, Imagem, Footer, TituloFooter, LinksFooter, InfoFooter} from './styles/Informacao.styles';

const Informacao = () => {
    return (
        <InformacaoConteiner>
            <TituloInformacao>Aqui estão algumas tecnologia que eu estudei</TituloInformacao>
            <CorpoInfomacao>
                <section>
                    <TextHtml>html <Small>4 a 5 anos</Small></TextHtml>
                    <TextCss>css <Small>4 a 5 anos</Small></TextCss>
                    <TextJs>javascript <Small>2 a 3 anos</Small></TextJs>
                    <TextReact>react.js <Small>1 a 2 anos</Small></TextReact>
                    <TextNext>next.js <Small>2 a 3 meses</Small></TextNext>
                    <TextNode>node.js <Small>3 a 4 meses</Small></TextNode>
                    <TextMysql>mysql <Small>3 a 4 meses</Small></TextMysql>
                </section>
            </CorpoInfomacao>
            <ProjetoConteiner>
                <TituloProjeto>Projetos criados</TituloProjeto>
                <LinkProjeto href="http://carloseduardobastos.github.io/restaurante" target="_blank">Restaurante</LinkProjeto>
                <Imagem src={imagemSite} alt="site" className="foto-site"/>
            </ProjetoConteiner>
            <Footer>
                <TituloFooter>Contato</TituloFooter>
                <LinksFooter href="https://github.com/CarlosEduardoBastos" target="_blank">Github</LinksFooter>
                <LinksFooter href="https://www.linkedin.com/in/carlos-eduardo-lima-5638271ba/" target="_blank">Linkedin</LinksFooter>
                <InfoFooter>Número: (55) 74 999449063</InfoFooter>
                <InfoFooter>E-mail: carloseduardolimabastosm@gmail.com</InfoFooter>
            </Footer>
        </InformacaoConteiner>
    )
}

export default Informacao
