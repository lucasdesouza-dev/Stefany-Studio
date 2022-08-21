import "./Sobre.css";
import imgPerfil from "../img/imagemPerfil.jpeg";
import Tarjeta from "./Tarjeta";

const Sobre = () => {
  return (
    <section id="section-2">
      <Tarjeta titulo="Sobre Mim" />
      <div className="perfil">
        <img className="img-perfil" src={imgPerfil} alt="imagem de perfil" />
        <div className="sobre">
          <h1 className="name">𝐒𝐓𝐄𝐅𝐀𝐍𝐘 𝐑𝐄𝐒𝐄𝐍𝐃𝐄 </h1>
          <div className="paragrafo">
            <p>
              Minha história teve início quando eu tinha apenas 15 anos, mas até
              então eu não imaginava que iria se tornar realidade. Desde mais
              nova minha mãe sempre fazia minhas sobrancelhas e da minha irmã,
              porque ela também tinha gosto pra isso, e com essa experiência
              dela eu comecei a me interessar em tirar pelinhos e passei a fazer
              a sobrancelha de outras amigas e a minha mesma sem nenhum curso,
              ate então não sonhava que iria crescer um amor tão grande por essa
              profissão. Com o passar do tempo trabalhei por 4 anos no setor
              administrativo em uma determinada empresa na minha cidade, porém
              após esse tempo sai e vi que aquilo ali não era mais pra mim.
            </p>
            <p>
              Então resolvi me especializar na área, procurei uma profissional
              qualificada que iria me ajudar a iniciar minha carreira, corri
              atrás e consegui fazer meu curso em 2019 de Designer de
              Sobrancelhas. Comecei a atender em casa por algum tempo e sim o
              começo não é fácil, desanimei por um tempo parei, até me reerguer
              e ver que essa profissão era o que eu amava fazer, entendi que
              nenhuma outra me traria a felicidade que ela me traz, o amor de
              ficar ali um dia todo trabalhando é imenso, cada rostinho novo e
              uma experiência diferente, que cada vez mais me liga a essa
              profissão.
            </p>
            <p>
              Comecei atender oficialmente no dia 19/03/2021 trabalhando somente
              com design de sobrancelhas, até que me encontrei em mais uma
              especialidade que me apaixonei que foi a Depilação com cera, fiz o
              curso em 2021 e logo após já comecei atender. Hoje atendo as duas
              modalidades no meu Studio, tanto Design de Sobrancelhas sendo (
              design estratégico, reconstrução e design com Henna), quanto
              Depilação Feminina com cera em todas áreas do corpo. Meus
              atendimentos são totalmente personalizados para cada cliente,
              entendo o que cada uma busca e ofereço meu melhor, aumentando cada
              dia mais a auto-estima de cada uma.
            </p>
            <p>
              Enfim, no início de tudo não imaginava tudo isso, todas
              conquistas, todo esse retorno em forma de carinho que recebi das
              minhas clientes mas, hoje vejo que vai muito mais além de só tirar
              pelinhos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
