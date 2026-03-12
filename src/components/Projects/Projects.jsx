import { useState } from "react";
import { projectsData } from "../../data/projectsData.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll"; // Ajuste o caminho conforme sua pasta
import line from "../../images/line.svg";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedProject, setSelectedProject] = useState(null);

  // Ativando o seu hook de scroll
  useRevealOnScroll({
    selector: ".reveal",
    once: true,
  });

  const handleShowMore = () => {
    setVisibleCount(20);
    // Pequeno truque: como o Observer já rodou, os novos itens
    // podem precisar de um "refresh" manual ou uma classe de entrada direta.
  };

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

      <div className="projects__grid">
        {projectsData.slice(0, visibleCount).map((project, index) => (
          <div
            key={project.id}
            // Se o index for maior que 7, significa que é uma foto nova.
            // Se o Reveal não ativar, a classe 'is-visible-instant' garante que apareça.
            className={`projects__card ${index < 4 ? "reveal" : "reveal-new"}`}
            onClick={() => setSelectedProject(project)}
          >
            <span className="projects__tag">{project.tag}</span>
            <img src={project.img} alt={project.tag} loading="lazy" />
            <div className="projects__card-info">
              <span className="projects__loc">{project.loc}</span>
              <span className="projects__dot">•</span>
              <span className="projects__area">{project.area}</span>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < projectsData.length && (
        <button className="projects__button reveal" onClick={handleShowMore}>
          Ver mais fotos
        </button>
      )}

      {/* Modal / Lightbox (Opcional manter aqui) */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.img} alt="Zoom" />
          </div>
        </div>
      )}
    </section>
  );
}
