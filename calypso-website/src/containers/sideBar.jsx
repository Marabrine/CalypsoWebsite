import "./sideBar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const { t } = useTranslation();
  const [isExtensionOpen, setIsExtensionOpen] = useState(false);
  const toggleExtension = () => setIsExtensionOpen(!isExtensionOpen);

  return (
    <>
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        onMouseLeave={toggleSidebar}
      >
        <ul className="items-list">
          <li>
            <Link
              to={"/items/pianos"}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/items/pianos";
              }}
            >
              {t("pianos")}
            </Link>
          </li>
          <li
            onMouseEnter={() => setIsExtensionOpen(true)}
            onMouseLeave={() => setIsExtensionOpen(false)}
          >
            <Link
              to={"/items/guitar-bass"}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/items/guitar-bass";
              }}
            >
              {t("guitars")}
            </Link>
            <ul className={`extension ${isExtensionOpen ? "visible" : ""}`}>
              <li>test1</li>
              <li>test2</li>
              <li>test3</li>
            </ul>
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
            <Link
              to={"/items/accessories"}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/items/accessories";
              }}
            >
              {t("accessories")}
            </Link>
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
