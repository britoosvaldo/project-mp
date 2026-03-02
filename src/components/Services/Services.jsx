import line from "../../images/line.svg";

export default function Services() {
  return (
    <section className="projects" id="projects">
      <img className="projects__line reveal" src={line} />
      <h2 className="projects__title reveal">NOSSOS SERVIÇOS</h2>
      <img className="projects__line reveal" src={line} />
      <p className="projects__subtitle reveal">
        Oferecemos soluções completas em engenharia civil, do projeto à entrega
        das chaves, com em qualidade, prazo e custo-benefício.
      </p>

      <div className="projects__grid reveal-group">
        <div className="projects__card reveal">
          <img className="card__icon" src="" />
          <h3 className="site__title">Around the USA</h3>
          <p className="site__description">
            Rede Social que permite aos usuários compartilhar fotos, editar seu
            perfil, curtir e deletar publicações. (TripleTen)
          </p>
        </div>

        <div className="projects__card reveal">
          <img className="card__icon" src="" />
          <h3 className="site__title">Around the USA</h3>
          <p className="site__description">
            Rede Social que permite aos usuários compartilhar fotos, editar seu
            perfil, curtir e deletar publicações. (TripleTen)
          </p>
        </div>

        <div className="projects__card reveal"></div>
        <div className="projects__card reveal"></div>
        <div className="projects__card reveal"></div>
        <div className="projects__card reveal"></div>
      </div>
    </section>
  );
}
