import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const images = [
    "/images/homepage/DSC07195.jpg",
    "/images/homepage/DSC05991.jpg",
    "/images/homepage/DSC06279-Edit.png",
    "/images/homepage/DSC06326.png",
    "/images/homepage/calypso-image8.jpeg",
    "/images/homepage/DSC06429.jpg",
    "/images/homepage/6E88498F-849B-4BED-9B29-1A52E5E37425.jpg",
    "/images/homepage/DSC05669.jpg",
    "/images/homepage/calypso-image6.jpeg",
    "/images/homepage/DSC06466.png",
    "/images/homepage/DSC06377-Edit.png",
    "/images/homepage/DSC06439.jpg",
    "/images/homepage/DSC07161.jpg",
    "/images/homepage/calypso-image7.jpeg",
    "/images/homepage/DSC07189.jpg",
    "/images/homepage/DSC06047.jpg",
    "/images/homepage/calypso-image5.jpeg",
    "/images/homepage/DSC07204.jpg",
    "/images/homepage/calypso-image1.png",
    "/images/homepage/DSC06199.jpg",
    "/images/homepage/calypso-image9.jpeg",
    "/images/homepage/calypso-image2.png",
    "/images/homepage/calypso-image3.png",
    "/images/homepage/calypso_image4.jpeg",
    "/images/homepage/DSC07200.jpg",
    "/images/homepage/DSC06153.jpg",
    "/images/homepage/calypso-image10.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-slideHome ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="carousel-arrow left"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        className="carousel-arrow right"
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
