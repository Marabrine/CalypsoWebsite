import "./SearchBarMobile.css";
import { useTranslation } from "react-i18next";
import SearchBarItem from "../SearchBarItem";
import useFilter from "../../hooks/useFilter";

export default function SearchBarMobile({
  isSearchBarOpen,
  toggleSearchBar,
  items,
}) {
  const { t } = useTranslation();
  const { value, setValue, filteredItems } = useFilter(items);
  return (
    <div className={`search-bar__mobile ${isSearchBarOpen ? "open" : ""}`}>
      <input
        type="text"
        className="search-bar__input"
        placeholder={t("search")}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="search-bar__close"
        onClick={() => {
          toggleSearchBar();
          setValue("");
        }}
      >
        <span>&#x2191;</span>
      </button>
      <ul className={`search-results ${value ? "visible" : ""}`}>
        {value && filteredItems.length === 0 ? (
          <li className="no-results">
            <i>{t("noResults")}</i>
          </li>
        ) : (
          filteredItems.map((item, index) => {
            const name = item.name || "";
            return <SearchBarItem key={index} item={item} name={name} />;
          })
        )}
      </ul>
    </div>
  );
}
