import Carousel from "../carousel/Carousel";
import "./Item.css";

function Item({ item }) {
  return (
    <div>
      <li key={item.id} className="items-display__item">
        {item.pictureUrl.length !== 0 ? (
          <Carousel>
            {item.pictureUrl.map((photo, index) => {
              console.log(photo, index);
              return <img src={photo} key={index} />;
            })}
          </Carousel>
        ) : (
          <img src="/images/no-image.png" />
        )}
        <div className="titles">
          <h3 className="item-name">{item.name}</h3>
          <h3 className="item-name sub">{item.id}</h3>
        </div>
      </li>
    </div>
  );
}
export default Item;
