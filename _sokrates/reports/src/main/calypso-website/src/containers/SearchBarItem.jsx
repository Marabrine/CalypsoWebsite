import "./SearchBar.css";
import { Link } from "react-router-dom";

export default function SearchBarItem({ item, name }) {
  return (
    <Link to={`/item/${item.id}`}>
      <li
        style={{
          borderBottom: "1px solid #ccc",
          padding: "0.5rem 0",
        }}
      >
        <strong>{name}</strong>
      </li>
    </Link>
  );
}
