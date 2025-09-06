import "./sideBar.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CalypsoRed from "../assets/CalypsoRed.png";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const { t } = useTranslation();
  const [isExtensionOpen, setIsExtensionOpen] = useState(false);
  const toggleExtension = () => setIsExtensionOpen(!isExtensionOpen);
  const location = useLocation();

  // Helper function to check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="items-list">
          <li className={isActive("/items/pianos") ? "active" : ""}>
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link to={"/items/pianos"} onClick={toggleSidebar}>
              {t("pianos")}
            </Link>
          </li>
          <li
            className={isActive("/items/guitar-bass") ? "active" : ""}
            onMouseEnter={() => setIsExtensionOpen(true)}
            onMouseLeave={() => setIsExtensionOpen(false)}
          >
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link to={"/items/guitar-bass"} onClick={toggleSidebar}>
              {t("guitars")}
            </Link>
            <ul className={`extension ${isExtensionOpen ? "visible" : ""}`}>
              <li>test1</li>
              <li>test2</li>
              <li>test3</li>
            </ul>
          </li>
          <li className={isActive("/items/orchestral-strings") ? "active" : ""}>
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link onClick={toggleSidebar} to={"/items/orchestral-strings"}>
              {t("orchStrings")}
            </Link>
          </li>
          <li className={isActive("/items/brass-wind") ? "active" : ""}>
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link onClick={toggleSidebar} to={"/items/brass-wind"}>
              {t("winds")}
            </Link>
          </li>
          <li className={isActive("/items/drums-percussion") ? "active" : ""}>
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link onClick={toggleSidebar} to={"/items/drums-percussion"}>
              {t("drums")}
            </Link>
          </li>
          <li className={isActive("/items/special") ? "active" : ""}>
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link onClick={toggleSidebar} to={"/items/special"}>
              {t("special")}
            </Link>
          </li>
          <li className={isActive("/items/accessories") ? "active" : ""}>
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link to={"/items/accessories"} onClick={toggleSidebar}>
              {t("accessories")}
            </Link>
          </li>
          <li className={isActive("/items/sonata-calypso") ? "active" : ""}>
            <img
              src={CalypsoRed}
              width="16rem"
              style={{ marginRight: "10px" }}
            />
            <Link onClick={toggleSidebar} to={"/items/sonata-calypso"}>
              {t("sonata")}
            </Link>
          </li>
        </ul>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
export default SideBar;
