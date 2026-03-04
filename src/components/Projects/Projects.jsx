import line from "../../images/line.svg";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__start">
        <img className="projects__line reveal" src={line} alt="" />
        <h2 className="projects__title reveal">NOSSOS PROJETOS</h2>
        <img className="projects__line reveal" src={line} alt="" />
      </div>

      <p className="projects__subtitle reveal">
        Conheça alguns de nossos projetos realizados. Cada obra é única e
        reflete nosso compromisso com excelência, transparência e satisfação do
        cliente.
      </p>

      <div className="masonry__container reveal">
        <div className="masonry__item">
          <img src="https://picsum.photos/id/1031/400/600" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Reforma</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/122/400/300" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Pintura</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/192/400/550" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Design</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/164/400/400" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Engenharia</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/1040/400/700" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Acabamento</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/1022/400/350" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Consultoria</span>
          </div>
        </div>
        <div className="masonry__item">
          <img src="https://picsum.photos/id/1031/400/600" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Reforma</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/122/400/300" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Pintura</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/192/400/550" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Design</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/164/400/400" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Engenharia</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/1040/400/700" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Acabamento</span>
          </div>
        </div>

        <div className="masonry__item">
          <img src="https://picsum.photos/id/1022/400/350" alt="Projeto" />
          <div className="masonry__overlay">
            <span>Consultoria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
