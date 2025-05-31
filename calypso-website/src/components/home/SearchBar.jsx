import "./SearchBar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import search from "../../assets/search-interface-symbol.png";

export default function NavLinks() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search..."
      />
      <Link className="button-search__img">
        <img src={search} width="23rem" height="20rem" />
      </Link>
    </div>
  );
}
