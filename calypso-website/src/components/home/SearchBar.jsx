import "./SearchBar.css";
import { useTranslation } from "react-i18next";

export default function NavLinks() {
  const { t } = useTranslation();
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder={t("search")}
      />
    </div>
  );
}
