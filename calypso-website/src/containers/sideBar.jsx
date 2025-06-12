import "./SideBar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        onMouseLeave={toggleSidebar}
      >
        <ul className="items-list">
          <li>
            <Link>{t("pianos")}</Link>
          </li>
          <li>
            <Link>{t("guitars")}</Link>
          </li>
          <li>
            <Link>{t("orchStrings")}</Link>
          </li>
          <li>
            <Link>{t("winds")}</Link>
          </li>
          <li>
            <Link>{t("drums")}</Link>
          </li>
          <li>
            <Link>{t("special")}</Link>
          </li>
          <li>
            <Link to={"/items/accessories"}>{t("accessories")}</Link>
          </li>
          <li>
            <Link>{t("sonata")}</Link>
          </li>
        </ul>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
export default SideBar;
