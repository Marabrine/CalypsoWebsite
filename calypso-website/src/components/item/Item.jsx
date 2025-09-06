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
      {/*<Link to={`/items/${item.id}`}> */}
      <li key={item.id} className="items-display__item">
        <div className="item-background"></div>
        {item.pictureUrl.length !== 0 ? (
          <Carousel onClick={handleCarouselClick}>
            {item.pictureUrl.map((photo, index) => {
              return <img src={photo} key={index} />;
            })}
          </Carousel>
        ) : (
          <img src="/images/no-image.png" />
        )}
        <div className="titles">
          <h3 className="item-name sub">{item.id}</h3>
        </div>
      </li>
      {/*</Link>*/}
    </div>
  );
}
export default Item;
