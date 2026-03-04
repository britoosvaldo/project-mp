import mpLogo from "../../images/mp-logo.svg";

import HoverIcon from "../HoverIcons/HoverIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__icon" src={mpLogo} />
      </div>

      <p className="footer__description">
        2026 &copy; Desenvolvido por Osvaldo Brito
      </p>

      <div className="footer__socialNetwork">
        <div className="footer__git-icon">
          <a href="https://github.com/britoosvaldo"></a>
        </div>
        <div className="footer__git-icon">
          <a href="https://www.linkedin.com/in/osvaldo-brito/"></a>
        </div>
        <div className="footer__git-icon">
          <a href=""></a>
        </div>
      </div>
    </footer>
  );
}
