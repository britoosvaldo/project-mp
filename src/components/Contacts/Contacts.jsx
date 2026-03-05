import line from "../../images/line.svg";
import phoneIcon from "../../images/phone-icon.svg";
import mailIcon from "../../images/mail-icon.svg";
import locationIcon from "../../images/location-icon.svg";
import clockIcon from "../../images/clock-icon.svg";
import whatsIconBlack from "../../images/whatsapp-icon-black.svg";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__start">
        <img className="contacts__line" src={line} alt="" />
        <h2 className="contacts__title">ENTRE EM CONTATO</h2>
        <img className="contacts__line" src={line} alt="" />
      </div>

      <p className="contacts__subtitle">
        Pronto para começar seu projeto? Entre em contato conosco para um
        orçamento sem compromisso ou para tirar suas dúvidas.
      </p>

      <div className="contacts__grid">
        <div className="contacts__information reveal">
          <p className="contacts__description">Informações de Contato</p>

          <div className="contacts__contacts">
            <img src={phoneIcon} alt="Phone Icon" />
            <p className="contacts__phone">
              Telefone <br />
              <span>(95) 99999-9999</span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src={mailIcon} alt="E-mail Icon" />
            <p className="contacts__mail">
              E-mail <br />
              <span>contato@mpengenharia.com</span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src={locationIcon} alt="Location Icon" />
            <p className="contacts__adress">
              Endereço <br />
              <span>
                Rua Embaúba, 1000 - Paraviana <br />
                Boa Vista - RR, 69300-000
              </span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src={clockIcon} alt="Location Icon" />
            <p className="contacts__hour">
              Horário de Atendimento <br />
              <span>
                Segunda a Sexta: 08h às 18h <br />
                Sábado: 08h às 12h
              </span>
            </p>
          </div>
        </div>

        <div className="contacts__box reveal">
          <form className="contacts__form">
            <h2 className="contacts__form-title">Solicite um Orçamento</h2>
            <h3 className="form__description">Nome</h3>
            <input
              className="contacts__name"
              type="text"
              placeholder="Seu nome"
            />

            <h3 className="form__description">Telefone</h3>
            <input
              className="contacts__email"
              type="text"
              placeholder="(95) 99999-9999"
            />

            <h3 className="form__description">Mensagem</h3>
            <textarea
              className="contacts__mensage"
              placeholder="Descreva seu projeto ou dúvida..."
            />

            <button className="contacts__btn">
              Enviar Mensagem
              <img className="contacts__btn-icon" src={whatsIconBlack} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
