import "./SearchBar.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ITEMS from "../data/items";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    const result = ITEMS.filter(
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
      <ul
        className={`search-results ${
          value && filteredItems.length > 0 ? "visible" : ""
        }`} // Optional CSS class for styling
      >
        {filteredItems.map((item, index) => {
          // Get the description of the current item or fallback to an empty string
          const description = item.description || "";
          const name = item.name || "";

          // Lowercase versions for case-insensitive matching
          const valueLower = value.toLowerCase();
          const descriptionLower = description.toLowerCase();
          // Find the index of the match in the description
          const matchIndex = descriptionLower.indexOf(valueLower);

          // If there's no match, skip this item
          if (matchIndex === -1) {
            return null;
          }

          // Define how much context (characters) to show before/after the match
          const snippetStart = Math.max(0, matchIndex - 20); // Prevent negative index
          const snippetEnd = Math.min(
            description.length,
            matchIndex + value.length + 20 // Avoid going beyond the string
          );

          // Slice the description to get a snippet around the match
          const snippet = description.slice(snippetStart, snippetEnd);

          // Get the index of the match relative to the snippet
          const relativeMatchIndex = matchIndex - snippetStart;

          // Slice the snippet into parts: before the match, the match, and after
          const before = snippet.slice(0, relativeMatchIndex);
          const match = snippet.slice(
            relativeMatchIndex,
            relativeMatchIndex + value.length
          );
          const after = snippet.slice(relativeMatchIndex + value.length);

          // Render the <li> with the bolded match and surrounding context
          return description === "" ? (
            "No results found"
          ) : (
            <Link>
              <li
                key={index}
                style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}
              >
                {before}
                <strong>{match}</strong>
                {after}
                {/* Add ellipsis if the snippet doesn't reach the end of the description */}
                {snippetEnd < description.length && "..."}({name})
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
