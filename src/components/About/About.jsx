export default function About() {
  return (
    <section className="about" id="about">
      <p className="about__me reveal" style={{ "--delay": "0ms" }}>
        // sobre mim
      </p>

      <h2 className="about__title reveal" style={{ "--delay": "80ms" }}>
        Quem sou <span>eu</span>
      </h2>

      <div className="about__grid">
        <p className="about__description reveal" style={{ "--delay": "160ms" }}>
          Olá! Sou contador e desenvolvedor web. Minha jornada de programação
          começou por gostar de tecnologias digitais e curiosidade.Busco sempre
          entregar código limpo, de fácil entendimento e de fácil manutenção
          assim como esse site que você está vendo.
          <br />
          <br />
          Quando não estou programando, estou procurando aprender novas
          tecnologias na área de programação e buscando aprender cada vez mais
          sobre novas tecnolgias e ferramentas que ajudem no desenvolvimento de
          sites e aplicativos eficientes .
        </p>

        <div className="about__card reveal" style={{ "--delay": "240ms" }}>
          <img className="about__icon" src="" alt="" />
          <h3 className="card__title">Como eu penso?</h3>
          <p className="card__subtitle">
            Gosto de quebrar problemas grandes em partes pequenas e resolver uma
            por uma.
          </p>
        </div>

        <div className="about__card reveal" style={{ "--delay": "320ms" }}>
          <img className="about__icon" src="" alt="" />
          <h3 className="card__title">Como eu trabalho?</h3>
          <p className="card__subtitle">
            Clean Code, componentização, reaproveitamento e atenção a UX.
          </p>
        </div>

        <div className="about__card reveal" style={{ "--delay": "320ms" }}>
          <img className="about__icon" src="" alt="" />
          <h3 className="card__title">Como eu trabalho?</h3>
          <p className="card__subtitle">
            Clean Code, componentização, reaproveitamento e atenção a UX.
          </p>
        </div>
      </div>

      <h3 className="about__tech reveal" style={{ "--delay": "120ms" }}>
        Tecnologias Utilizadas
      </h3>

      <div
        className="about__skills-wrapper reveal"
        style={{ "--delay": "200ms" }}
      >
        <div className="about__skills-marquee">
          <div className="about__skills-track">
            <div className="about__skill">
              <p>HTML</p>
            </div>
            <div className="about__skill">
              <p>CSS</p>
            </div>
            <div className="about__skill">
              <p>JavaScript</p>
            </div>
            <div className="about__skill">
              <p>React</p>
            </div>
            <div className="about__skill">
              <p>Node.js</p>
            </div>
            <div className="about__skill">
              <p>Express</p>
            </div>
            <div className="about__skill">
              <p>Git</p>
            </div>

            <div className="about__skill">
              <p>HTML</p>
            </div>
            <div className="about__skill">
              <p>CSS</p>
            </div>
            <div className="about__skill">
              <p>JavaScript</p>
            </div>
            <div className="about__skill">
              <p>React</p>
            </div>
            <div className="about__skill">
              <p>Node.js</p>
            </div>
            <div className="about__skill">
              <p>Express</p>
            </div>
            <div className="about__skill">
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
