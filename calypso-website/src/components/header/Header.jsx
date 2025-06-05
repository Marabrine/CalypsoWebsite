import SearchBar from "../../containers/SearchBar";
import "./Header.css";
import LanguageSwitcher from "../../containers/changeLanguage";
import { Link } from "react-router-dom";
import CalypsoFlag from "../../assets/CalypsoFlag.png";
import HamburgerButton from "../../containers/hamburgerMenu";
import SideBar from "../../containers/sideBar";
import { useState } from "react";
import CalypsoText from "../../assets/CalypsoText.png";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const { t } = useTranslation();
  return (
    <div>
      <header>
        <Link to="/">
          <img src={CalypsoFlag} width="80rem" height="80rem" />
        </Link>
        <img
          src={CalypsoText}
          style={{
            width: "15rem", // or use maxWidth: "100%" for responsiveness
            height: "auto",
          }}
          className="calypso-text"
        />

        <SearchBar />
        <Link to="/contact">
          <button className="button-contact">{t("contact")}</button>
        </Link>
        <HamburgerButton onHover={toggleSidebar} />
      </header>
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <LanguageSwitcher />
    </div>
  );
}
