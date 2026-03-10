import { useRef } from "react";
import line from "../../images/line.svg";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import houseImg from "../../images/residential-img.svg";

export default function Team() {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    trackRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects">
      <div className="projects__start reveal">
        <img className="projects__line" src={line} alt="linha" />
        <h2 className="projects__title">NOSSOS SERVIÇOS</h2>
        <img className="projects__line" src={line} alt="linha" />
      </div>
      <p className="projects__subtitle reveal">
        Oferecemos soluções completas em engenharia civil, do projeto à entrega
        das chaves, com em qualidade, prazo e custo-benefício.
      </p>

      <div className="projects__carousel">
        <button
          className="projects__arrow projects__arrow--left"
          onClick={scrollLeft}
        >
          <img src={leftArrow} />
        </button>

        <div className="projects__cards" ref={trackRef}>
          <div className="projects__card">
            <img className="projects__photo" src={houseImg} />
          </div>
          <div className="projects__card">
            <img className="projects__photo" src={houseImg} />
          </div>
          <div className="projects__card">
            <img className="projects__photo" src={houseImg} />
          </div>
        </div>
        <button
          className="projects__arrow projects__arrow--rigth"
          onClick={scrollRight}
        >
          <img src={rightArrow} />
        </button>
      </div>
    </section>
  );
}
