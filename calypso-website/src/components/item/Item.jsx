import "./Item.css";

function Item({ item }) {
  console.log(item);
  return (
    <div>
      <li key={item.id} className="items-display__item">
        {item.pictureUrl.length !== 0 ? (
          <img src={item.pictureUrl} />
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
