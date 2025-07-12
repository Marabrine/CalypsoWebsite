import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  };

  return (
    <div className="carousel">
      <button className="slider__btn-prev" onClick={slidePrev}>
        {"<"}
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index !== activeIndex ? "hide" : ""
              }`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button className="slider__btn-next" onClick={slideNext}>
        {">"}
      </button>
    </div>
  );
}
