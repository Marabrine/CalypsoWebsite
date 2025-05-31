import SearchBar from "../home/SearchBar";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <SearchBar />
        </nav>
      </header>
    </div>
  );
}
