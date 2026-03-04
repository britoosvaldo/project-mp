export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <p className="contacts__talk reveal" style={{ "--delay": "0ms" }}>
        // fale comigo
      </p>

      <h2 className="contacts__title reveal" style={{ "--delay": "80ms" }}>
        Entre em <span>contato</span>
      </h2>

      <div className="contacts__grid">
        {/* 👇 bloco da esquerda */}
        <div
          className="contacts__information reveal"
          style={{ "--delay": "160ms" }}
        >
          <h3 className="contacts__subtitle">
            Vamos criar algo incrível juntos?
          </h3>

          <p className="contacts__description">
            Estou sempre pronto para aprender e realizar novos projetos. Se você
            tem uma ideia ou precisa de ajuda com seu projeto, entre em contato!
          </p>

          <div className="contacts__contacts">
            <img src="" alt="E-mail Icon" />
            <p className="contacts__mail">
              E-mail <br />
              <span>osvaldobrito.dev@gmail.com</span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src="" alt="Location Icon" />
            <p className="contacts__location">
              Localização <br />
              <span>Roraima, Brasil</span>
            </p>
          </div>
        </div>

        {/* 👇 formulário entra depois */}
        <div className="contacts__box reveal" style={{ "--delay": "240ms" }}>
          <form className="contacts__form">
            <h3 className="form__description">Nome</h3>
            <input
              className="contacts__name"
              type="text"
              placeholder="Seu nome"
            />

            <h3 className="form__description">E-mail</h3>
            <input
              className="contacts__email"
              type="text"
              placeholder="seu@email.com"
            />

            <h3 className="form__description">Mensagem</h3>
            <textarea
              className="contacts__mensage"
              placeholder="Conte-me sobre o seu projeto..."
            />

            <button className="contacts__btn">
              Enviar Mensagem
              <img className="contacts__btn-icon" src="" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
