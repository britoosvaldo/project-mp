import buildingIcon from "../../images/building-icon.svg";
import rulerIcon from "../../images/ruler-icon.svg";
import shieldIcon from "../../images/shield-icon.svg";
import arrowIcon from "../../images/arrow-icon.svg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

export default function Main() {
  useRevealOnScroll();

  return (
    <main className="main" id="home">
      <h1 className="main__title " style={{ "--delay": "0ms" }}>
        Construindo o Futuro
        <br /> com Solidez
      </h1>
      <p className="main__description">
        Especialista em construções residenciais e comerciais. Transformamos
        projetos em realidade com compromisso, qualidade e resultados
        excepcionais.
      </p>
      <a
        href="#contacts"
        onClick={() => setIsOpen(false)}
        style={{ textDecoration: "none" }}
      >
        <button className="main__bt-budget">
          SOLICITAR ORÇAMENTO
          <img className="bt__icon" src={arrowIcon} />
        </button>
      </a>
      <a
        href="#projects"
        onClick={() => setIsOpen(false)}
        style={{ textDecoration: "none" }}
      >
        <button className="main__bt-projects">VER PROJETOS</button>
      </a>
      <div className="main__highlights">
        <div className="highlights">
          <img className="highlights--icon" src={buildingIcon} />
          <p className="highlights--number">+100</p>
          <p className="highlights--text">Obras entregues</p>
        </div>
        <div className="highlights">
          <img className="highlights--icon" src={rulerIcon} />
          <p className="highlights--number">+50k</p>
          <p className="highlights--text">m² construídos</p>
        </div>
        <div className="highlights">
          <img className="highlights--icon" src={shieldIcon} />
          <p className="highlights--number">100%</p>
          <p className="highlights--text">Satisfação</p>
        </div>
      </div>
    </main>
  );
}
