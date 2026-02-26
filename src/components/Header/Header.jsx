import { useState } from "react";
import mpLogo from "../../images/mp-logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
        <img className="nav__logo" src={mpLogo} alt="Logo" />

        <button
          type="button"
          className="nav__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="nav__bar" />
          <span className="nav__bar" />
          <span className="nav__bar" />
        </button>

        <ul className="nav__links">
          <li>
            <a
              className="nav__link"
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#contacts"
              onClick={() => setIsOpen(false)}
            >
              Contatos
            </a>
          </li>
          <li>
            <button className="nav__link nav__button">
              Solite um Orçamento
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
