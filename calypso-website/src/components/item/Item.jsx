import "./Item.css";

function Item({ item }) {
  return (
    <li key={item.id} className="items-display__item">
      <img src={item.pictureUrl} width="200px" height="200px" />
      <h3 className="item-name">{item.name}</h3>
    </li>
  );
}
export default Item;
