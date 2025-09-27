import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  const handleCarouselClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div>
      <li key={item.id} className="items-display__item">
        <div className="item-background"></div>
        {item.pictureUrl.length !== 0 ? (
          <Carousel onClick={handleCarouselClick}>
            {item.pictureUrl.map((photo, index) => {
              return (
                <Link to={`/items/${item.id}`}>
                  <img src={photo} key={index} />
                </Link>
              );
            })}
          </Carousel>
        ) : (
          <img src="/images/no-image.png" />
        )}
        <div className="titles">
          <h3 className="item-name sub">{item.id}</h3>
        </div>
      </li>
    </div>
  );
}
export default Item;
