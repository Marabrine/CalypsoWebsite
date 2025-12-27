import CalypsoRed from "../assets/CalypsoRed.png";
import { Link } from "react-router-dom";

export default function ItemList({ item }) {
  return (
    <li>
      <img src={CalypsoRed} width="12rem" />
      <Link to={`/items/${item.id}`}>{item.id}</Link>
    </li>
  );
}
