import "./SearchBar.css";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search..."
      />
    </div>
  );
}
