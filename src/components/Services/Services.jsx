import line from "../../images/line.svg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { servicesData } from "../../data/servicesData";

export default function Services() {
  useRevealOnScroll();

  return (
    <section className="services" id="services">
      <div className="services__start reveal">
        <img className="services__line" src={line} alt="linha" />
        <h2 className="services__title">NOSSOS SERVIÇOS</h2>
        <img className="services__line" src={line} alt="linha" />
      </div>

      <p className="services__subtitle reveal">
        Do projeto arquitetônico à entrega das chaves — engenharia com
        responsável técnico em todas as etapas.
      </p>

      <div className="services__grid">
        {servicesData.map((service) => (
          <div className="services__card reveal" key={service.id}>
            <img
              className="services-card__icon"
              src={service.icon}
              alt={service.title}
            />
            <h3 className="services-card__title">{service.title}</h3>
            <p className="services-card__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
