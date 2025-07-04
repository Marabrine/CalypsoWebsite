import "./Item.css";

function Item({ item }) {
  return (
    <div>
      <li key={item.id} className="items-display__item">
        <img src={item.pictureUrl} />
        <h3 className="item-name">{item.name}</h3>
      </li>
    </div>
  );
}
export default Item;
