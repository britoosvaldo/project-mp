import InputMask from "react-input-mask"; // 1. Importar a biblioteca
import { useState } from "react";
import line from "../../images/line.svg";
import phoneIcon from "../../images/phone-icon.svg";
import mailIcon from "../../images/mail-icon.svg";
import locationIcon from "../../images/location-icon.svg";
import clockIcon from "../../images/clock-icon.svg";
import whatsIconBlack from "../../images/whatsapp-icon-black.svg";

export default function Contacts() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Estado para a animação do botão
  const [enviado, setEnviado] = useState(false);

  const handleEnviarWhatsapp = (e) => {
    e.preventDefault();

    const foneEmpresa = "5595991228743";
    const textoMensagem =
      `*Solicitação de Orçamento - Site* 🏗️\n\n` +
      `*Nome:* ${nome}\n` +
      `*Telefone:* ${telefone}\n` +
      `*Mensagem:* ${mensagem}`;

    const url = `https://wa.me/${foneEmpresa}?text=${encodeURIComponent(textoMensagem)}`;

    // Abre o WhatsApp
    window.open(url, "_blank");

    // --- LÓGICA DA ANIMAÇÃO ---
    setEnviado(true); // Ativa o estado de sucesso

    // Limpa os campos após o envio
    setNome("");
    setTelefone("");
    setMensagem("");

    // Volta o botão ao normal depois de 3 segundos
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

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
              <span>(95) 99122-8743</span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src={mailIcon} alt="E-mail Icon" />
            <p className="contacts__mail">
              E-mail <br />
              <span>mpengenhariaxxx@gmail.com</span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src={locationIcon} alt="Location Icon" />
            <p className="contacts__adress">
              Endereço <br />
              <span>
                Rua Genipapeiro, 263 - Caçari <br />
                Boa Vista - RR, 69307-440
              </span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src={clockIcon} alt="Clock Icon" />
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
          <form className="contacts__form" onSubmit={handleEnviarWhatsapp}>
            <h2 className="contacts__form-title">Solicite um Orçamento</h2>

            <h3 className="form__description">Nome</h3>
            <input
              className="contacts__name"
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <h3 className="form__description">Telefone</h3>
            <input
              className="contacts__email"
              type="tel"
              placeholder="(95) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />

            <h3 className="form__description">Mensagem</h3>
            <textarea
              className="contacts__mensage"
              placeholder="Descreva seu projeto ou dúvida..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />

            {/* O Botão muda dinamicamente com base no estado 'enviado' */}
            <button
              type="submit"
              className={`contacts__btn ${enviado ? "contacts__btn--success" : ""}`}
              disabled={enviado} // Desabilita enquanto exibe o sucesso
            >
              {enviado ? "Mensagem Enviada!" : "Enviar Mensagem"}
              <img
                className="contacts__btn-icon"
                src={whatsIconBlack}
                alt="WhatsApp Icon"
                style={enviado ? { display: "none" } : {}} // Esconde o ícone no sucesso
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
