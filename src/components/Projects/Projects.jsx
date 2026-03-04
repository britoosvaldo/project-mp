export default function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="my-projects reveal">// meus projetos</p>

      <h2 className="projects__title reveal">
        Trabalhos <span>recentes</span>
      </h2>

      <div className="projects__grid reveal-group">
        <div className="projects__card reveal">
          <img className="card__icon" src="" />
          <a
            className="github__link"
            href="https://github.com/britoosvaldo/web_project_api_full"
          ></a>

          <h3 className="site__title">Around the USA</h3>
          <p className="site__description">
            Rede Social que permite aos usuários compartilhar fotos, editar seu
            perfil, curtir e deletar publicações. (TripleTen)
          </p>
          <p className="site__techs">
            HTML / CSS / JavaScript / React / Node.js / MongoDB
          </p>
        </div>

        <div className="projects__card reveal">
          <img className="card__icon" src="" />
          <a
            className="github__link"
            href="https://github.com/britoosvaldo/web-news-frontend"
          ></a>

          <h3 className="site__title">Web News</h3>
          <p className="site__description">
            Site de pesquisa de notícias, onde o usuário, após ter feito
            registro e login, pode salvar em sua conta as notícias de seu
            interesse. (TripleTen)
          </p>
          <p className="site__techs">
            HTML / CSS / JavaScript / React / Node.js / MongoDB
          </p>
        </div>

        <div className="projects__card reveal"></div>
        <div className="projects__card reveal"></div>
        <div className="projects__card reveal"></div>
        <div className="projects__card reveal"></div>
      </div>

      <div className="projects__link reveal">
        <a
          href="https://github.com/britoosvaldo?tab=repositories"
          className="projects__link-text"
        >
          Veja mais no GitHub
        </a>
      </div>
    </section>
  );
}
