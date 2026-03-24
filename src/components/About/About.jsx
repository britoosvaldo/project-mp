import line from "../../images/line.svg";
import targetIcon from "../../images/target-icon.svg";
import eyeIcon from "../../images/eye-icon.svg";
import heartIcon from "../../images/heart-icon.svg";
import arrowList from "../../images/arrow-list.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__start">
        <img className="about__line reveal" src={line} />
        <h2 className="about__title reveal">SOBRE NÓS</h2>
        <img className="about__line reveal" src={line} />
      </div>

      <div className="about__grid">
        <h1 className="about__grid-title">
          Há mais de 5 anos construindo sonhos
        </h1>
        <p className="about__description reveal" style={{ "--delay": "160ms" }}>
          A MP Engenharia é uma construtora registrada no CREA-RR, atuando em
          Boa Vista com foco em construções residenciais, comerciais e
          industriais.
          <br />
          <br />
          Hoje executamos 7 obras simultâneas, incluindo o Residencial Boa Vista
          — um edifício de 14 pavimentos na fase de acabamento interno. Cada
          obra tem acompanhamento direto do engenheiro responsável, cronograma
          definido e orçamento transparente.
        </p>
        <ul className="about__list">
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Registro ativo no CREA-RR
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            ART emitida em todas as obras
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Orçamento base de mercado local
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Engenheiro presente em obra
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Cronograma contratual com marcos
          </li>
          <li className="about__list-elements">
            <img
              className="about__list-icon"
              src={arrowList}
              alt="Icone de Seta"
            />
            Relatório fotográfico periódico
          </li>
        </ul>

        <div className="about__card reveal" style={{ "--delay": "240ms" }}>
          <img className="about-card__icon" src={targetIcon} alt="" />
          <h3 className="about-card__title">Responsabilidade Técnica</h3>
          <p className="about-card__subtitle">
            Toda obra com ART registrada e engenheiro responsável acompanhando
            do início ao fim.
          </p>
        </div>

        <div className="about__card reveal" style={{ "--delay": "320ms" }}>
          <img className="about-card__icon" src={eyeIcon} alt="" />
          <h3 className="about-card__title">Transparência no Orçamento</h3>
          <p className="about-card__subtitle">
            Orçamento detalhado com base no mercado local antes de começar. Sem
            surpresas no meio da obra.
          </p>
        </div>

        <div className="about__card reveal" style={{ "--delay": "320ms" }}>
          <img className="about-card__icon" src={heartIcon} alt="" />
          <h3 className="about-card__title">Prazo com Cronograma Real</h3>
          <p className="about-card__subtitle">
            Cronograma definido em contrato com marcos de entrega que você
            acompanha.
          </p>
        </div>
      </div>

      <div className="about__informations">
        <div className="informations">
          <p className="informations-number">7 Obras</p>
          <p className="informations-text">em execução simultânea</p>
        </div>
        <div className="informations">
          <p className="informations-number">+7.500m²</p>
          <p className="informations-text">construídos</p>
        </div>
        <div className="informations">
          <p className="informations-number">14</p>
          <p className="informations-text">pavimentos em construção</p>
        </div>
      </div>
    </section>
  );
}
