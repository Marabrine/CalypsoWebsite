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
import { useNavigate } from "react-router-dom";
import SearchButton from "../../assets/search-explore-white-icon-transparent-png-701751695037015aogz4s2rh6-removebg-preview.png";
import SearchBarMobile from "../../containers/mobile/SearchBarMobile";

export default function Header({ props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
    console.log(isSearchBarOpen);
  };

  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="main-header">
      <header>
        <HamburgerButton onHover={toggleSidebar} />
        <div className="logos">
          <Link to="/" className="calypso-logo">
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
        </div>
        <SearchBar items={props} />
        <SearchBarMobile
          isSearchBarOpen={isSearchBarOpen}
          toggleSearchBar={toggleSearchBar}
          items={props}
        />
        <button onClick={toggleSearchBar} className="search-button__mobile">
          <img src={SearchButton} width="35rem" height="35rem" />
        </button>
        <LanguageSwitcher />

        {/* <Link to="/contact">
          <button className="button-contact">Contact</button>
        </Link> */}
      </header>
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
