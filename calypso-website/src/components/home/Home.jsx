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
  return (
    <div className="img-container">
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            loading="lazy"
            className="fade-in-image"
            style={{
              animationDelay: `${index * 0.1}s`, // Each image appears 0.2s after the previous one
            }}
          />
        );
      })}
    </div>
  );
};
export default Home;
