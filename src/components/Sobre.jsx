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
          <p>
            Quando criança, Stefany Resende já dava sinais que seu futuro
            estaria na beleza. Gostava de produzir amigas para irem à bailes
            infantis, dar palpites nas roupas, cabelos e maquiagens de todas as
            mulheres da família, e amigas e mais tarde maquiando-as
            detalhadamente para irem desde à padaria até eventos sociais.
          </p>
          <p>
            Mais tarde, resolveu passar uma temporada na Inglaterra, para
            estudar o idioma e retornando ao Brasil, iniciou o curso de Relações
            Internacionais e participando de vários projetos sociais. Porém, as
            brincadeiras de infância falaram mais alto, quando então resolveu se
            jogar de cabeça na técnica minimalista que estava fazendo à cabeça
            de todas as mulheres: a Micropigmentação de Sobrancelhas.
          </p>
          <p>
            Depois de diversas certificações nacionais e internacionais,
            inclusive formada pela Phibrows Academy, hoje conceituada a melhor
            academia da técnica Microblading no mundo. E, atuando na área da
            micropigmentação de sobrancelha desde 2016, inicia uma nova fase em
            seu estúdio, localizado no tradicional bairro da Mooca, na Zona
            Leste, onde oferece diversas técnicas, como Design de Sobrancelhas,
            Microblading, Micropigmentação de Sobrancelhas Fio a Fio, Shadow,
            Shadow Line, Brow Lamination, Micropigmentação Labial, Revitalização
            Labial, Hydra Gloss Lips, etc. Sua técnica é baseada nos conceitos
            de visagismo, oferecendo um atendimento totalmente personalizado,
            onde valoriza sobretudo a naturalidade do olhar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
