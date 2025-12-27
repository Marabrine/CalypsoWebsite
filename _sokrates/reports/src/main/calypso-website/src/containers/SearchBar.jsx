import "./SearchBar.css";
import { useTranslation } from "react-i18next";
import SearchBarItem from "./SearchBarItem";
import useFilter from "../hooks/useFilter";

export default function SearchBar({ items }) {
  const { t } = useTranslation();
  const { value, setValue, filteredItems } = useFilter(items);

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder={t("search")}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul className={`search-results ${value ? "visible" : ""}`}>
        {value && filteredItems.length === 0 ? (
          <li className="no-results">
            <i>{t("noResults")}</i>
          </li>
        ) : (
          filteredItems.map((item, index) => {
            const name = item.id || "";
            return <SearchBarItem key={index} item={item} name={name} />;
          })
        )}
      </ul>
    </div>
  );
}
