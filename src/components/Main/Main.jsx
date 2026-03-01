import buildingIcon from "../../images/building-icon.svg";
import rulerIcon from "../../images/ruler-icon.svg";
import shieldIcon from "../../images/shield-icon.svg";
import arrowIcon from "../../images/arrow-icon.svg";

export default function Main() {
  return (
    <main className="main">
      <h1 className="main__title">
        Construindo o Futuro
        <br /> com Solidez
      </h1>
      <p className="main__description">
        Especialista em construções residenciais e comerciais. Transformamos
        projetos em realidade com compromisso, qualidade e resultados
        excepcionais.
      </p>
      <button className="main__bt-budget">
        SOLICITAR ORÇAMENTO
        <img className="bt__icon" src={arrowIcon} />
      </button>
      <button className="main__bt-projects">VER PROJETOS</button>
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
