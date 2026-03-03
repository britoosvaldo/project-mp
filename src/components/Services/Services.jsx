import line from "../../images/line.svg";
import helmetIcon from "../../images/helmet-icon.svg";
import boardIcon from "../../images/board-icon.svg";
import rulerIcon from "../../images/ruler-icon.svg";
import graphicIcon from "../../images/graphic-icon.svg";
import buildIcon from "../../images/build-icon.svg";
import hammerIcon from "../../images/hammer-icon.svg";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__start">
        <img className="services__line reveal" src={line} />
        <h2 className="services__title reveal">NOSSOS SERVIÇOS</h2>
        <img className="services__line reveal" src={line} />
      </div>
      <p className="services__subtitle reveal">
        Oferecemos soluções completas em engenharia civil, do projeto à entrega
        das chaves, com em qualidade, prazo e custo-benefício.
      </p>

      <div className="services__grid reveal-group">
        <div className="services__card reveal">
          <img className="services-card__icon" src={helmetIcon} />
          <h3 className="services-card__title">Execução de Obras</h3>
          <p className="services-card__description">
            Construção completa de edificações residenciais e comerciais com
            acompanhamento técnico e especializado.
          </p>
        </div>

        <div className="services__card reveal">
          <img className="services-card__icon" src={boardIcon} />
          <h3 className="services-card__title">Gerenciamento de Obras</h3>
          <p className="services-card__description">
            Gestão profissional de cronograma, custos e qualidade para garantir
            o sucesso do seu projeto.
          </p>
        </div>

        <div className="services__card reveal">
          <img className="services-card__icon" src={rulerIcon} />
          <h3 className="services-card__title">Projetos Arquitetônicos</h3>
          <p className="services-card__description">
            Desenvolvimento de projetos personalizados que combinam estética,
            funcionalidade e viabilidade técnica.
          </p>
        </div>

        <div className="services__card reveal">
          <img className="services-card__icon" src={graphicIcon} />
          <h3 className="services-card__title">Orçamentos Detalhados</h3>
          <p className="services-card__description">
            Elaboração de orçamentos precisos e trasparentes para planejamento
            financeiro da sua obra.
          </p>
        </div>

        <div className="services__card reveal">
          <img className="services-card__icon" src={buildIcon} />
          <h3 className="services-card__title">Reformas</h3>
          <p className="services-card__description">
            Modernização e revitalização de espaços existentes, mantendo
            qualidade estrutural e estética.
          </p>
        </div>

        <div className="services__card reveal">
          <img className="services-card__icon" src={hammerIcon} />
          <h3 className="services-card__title">Reformas</h3>
          <p className="services-card__description">
            Modernização e revitalização de espaços existentes, mantendo
            qualidade estrutural e estética.
          </p>
        </div>
      </div>
    </section>
  );
}
