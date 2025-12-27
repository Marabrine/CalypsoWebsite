import { useParams } from "react-router-dom";
import "./itemDetails.css";

function ItemDetails({ props }) {
  const { id } = useParams();
  const item = props.find((item) => item.id === id);
  return (
    <div className="itemDetails__box">
      <div className="title-box">
        <h1 className="title">{item.id}</h1>
      </div>
      <div className="image-box">
        <img
          src={item.pictureUrl[0]}
          width="600rem"
          className="itemDetails__img"
        />
      </div>
      <div>
        <h3 className="id-name">
          Calypso {item.id} {item.name}
        </h3>
      </div>
      <div className="description">{item.description}</div>
    </div>
  );
}
export default ItemDetails;
