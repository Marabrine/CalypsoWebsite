import "./SearchBar.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ items }) {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    const result = items.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(result);
  }, [value]);
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
            const name = item.name || "";
            return (
              <Link key={index} to={`/item/${item.id}`}>
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
          })
        )}
      </ul>
    </div>
  );
}
