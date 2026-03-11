import { projectsData } from "../../data/projectsData.js";
import line from "../../images/line.svg";
import houseImg from "../../images/residential-img.svg";

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects__start reveal">
        <img className="projects__line" src={line} alt="linha" />
        <h2 className="projects__title">NOSSOS PROJETOS</h2>
        <img className="projects__line" src={line} alt="linha" />
      </div>

      <p className="projects__subtitle reveal">
        Oferecemos soluções completas em engenharia civil, do projeto à entrega
        das chaves, com foco em qualidade, prazo e custo-benefício.
      </p>

      <div className="projects__gallery reveal">
        {projectsData.map((project) => (
          <div className="projects__item" key={project.id}>
            <span className="projects__tag">{project.tag}</span>

            <img
              src={project.img}
              alt={project.tag}
              className="projects__img"
              style={{ height: project.h }}
            />

            <div className="projects__info">
              <span className="projects__location">{project.loc}</span>
              <span className="projects__dot">•</span>
              <span className="projects__area">{project.area}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
