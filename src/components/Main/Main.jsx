import arrowIcon from "../../images/arrow-icon.svg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

export default function Main() {
  useRevealOnScroll();

  return (
    <main className="main" id="home">
      <h1 className="main__title " style={{ "--delay": "0ms" }}>
        Do Projeto à Entrega
        <br /> com <span>Engenharia de Verdade</span>
      </h1>
      <p className="main__description">
        Projetos residenciais e comerciais com acompanhamento técnico do
        engenheiro responsável em cada etapa. Do alicerce ao acabamento — sem
        surpresas no orçamento.
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
          <p className="highlights--number">14 andares</p>
          <p className="highlights--text">em construção</p>
        </div>
        <div className="highlights">
          <p className="highlights--number">+7.500m²</p>
          <p className="highlights--text">construídos</p>
        </div>
        <div className="highlights">
          <p className="highlights--number">7 obras</p>
          <p className="highlights--text">simultâneas</p>
        </div>
      </div>
    </main>
  );
}
