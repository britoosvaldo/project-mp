import line from "../../images/line.svg";
import targetIcon from "../../images/target-icon.svg";
import eyeIcon from "../../images/eye-icon.svg";
import heartIcon from "../../images/heart-icon.svg";
import arrowList from "../../images/arrow-list.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="services__start">
        <img className="services__line reveal" src={line} />
        <h2 className="services__title reveal">SOBRE NÓS</h2>
        <img className="services__line reveal" src={line} />
      </div>

      <div className="about__grid">
        <h1 className="about__grid-title">
          Há mais de 5 anos construindo sonhos
        </h1>
        <p className="about__description reveal" style={{ "--delay": "160ms" }}>
          A MP Engenharia nasceu da paixão por transformar projetos em
          realidade. Com uma equipe experiente de engenheiros e arquitetos,
          oferecemos soluções completas para construções residenciais e
          comercias.
          <br />
          <br />
          Nosso compromisso vai além da entrega: buscamos criar espaços que
          melhorem a vida das pessoas, com segurança, qualidade e design único,
          pensando em cada detalhe.
        </p>
        <ul className="about__list">
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Equipe técnica altamente qualificada
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Materiais de primeira qualidade
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Garantia estendida em todas as obras
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Cumprimento rigoroso de prazos
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Acompanhamento em tempo real
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Atendimento personalizado
          </li>
        </ul>

        <div className="about__card reveal" style={{ "--delay": "240ms" }}>
          <img className="about-card__icon" src={targetIcon} alt="" />
          <h3 className="about-card__title">Missão</h3>
          <p className="about-card__subtitle">
            Entregar obras de excelência, dentro do prazo e orçamento, superando
            as expectativas dos nossos clientes.
          </p>
        </div>

        <div className="about__card reveal" style={{ "--delay": "320ms" }}>
          <img className="about-card__icon" src={eyeIcon} alt="" />
          <h3 className="about-card__title">Visão</h3>
          <p className="about-card__subtitle">
            Ser referência em construção civil, reconhecida pela qualidade,
            inovação e compromisso com resultados.
          </p>
        </div>

        <div className="about__card reveal" style={{ "--delay": "320ms" }}>
          <img className="about-card__icon" src={heartIcon} alt="" />
          <h3 className="about-card__title">Valores</h3>
          <p className="about-card__subtitle">
            Ética, transparência, comprometimento, qualidade e respeito ao
            cliente e ao meio ambiente.
          </p>
        </div>
      </div>

      <div className="about__informations">
        <div className="informations">
          <p className="informations-number">+5</p>
          <p className="informations-text">anos de mercado</p>
        </div>
        <div className="informations">
          <p className="informations-number">+100</p>
          <p className="informations-text">projetos entregues</p>
        </div>
        <div className="informations">
          <p className="informations-number">+20</p>
          <p className="informations-text">profissionais</p>
        </div>
      </div>
    </section>
  );
}
