import mpLogo from "../../images/mp-logo.svg";
import whatsIconGrey from "../../images/whatsapp-icon-grey.svg";
import whatsIconWhite from "../../images/whatsapp-icon-white.svg";
import instaIconGrey from "../../images/insta-icon-grey.svg";
import instaIconWhite from "../../images/insta-icon.svg";

import HoverIcon from "../HoverIcons/HoverIcons.jsx";

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
        <div className="footer__whats-icon">
          <a href="#contacts">
            <HoverIcon
              firstColor={whatsIconGrey}
              secondColor={whatsIconWhite}
              alt="WhatsApp"
            />
          </a>
        </div>
        <div className="footer__whats-icon">
          <a href="https://www.instagram.com/mpengenhariarr/">
            <HoverIcon
              firstColor={instaIconGrey}
              secondColor={instaIconWhite}
              alt="WhatsApp"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
