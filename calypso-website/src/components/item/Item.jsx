import "./Item.css";

function Item({ item }) {
  return (
    <div>
      <li key={item.id} className="items-display__item">
        <img
          src={
            item.pictureUrl !== ""
              ? item.pictureUrl
              : "../../assets/no-image.png"
          }
        />
        <div className="titles">
          <h3 className="item-name">{item.name}</h3>
          <h3 className="item-name sub">{item.id}</h3>
        </div>
      </li>
    </div>
  );
}
export default Item;
