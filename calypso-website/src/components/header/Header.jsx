import SearchBar from "../../containers/SearchBar";
import "./Header.css";
import LanguageSwitcher from "../../containers/changeLanguage";
import { Link } from "react-router-dom";
import CalypsoFlag from "../../assets/CalypsoFlag.png";
import HamburgerButton from "../../containers/hamburgerMenu";
import SideBar from "../../containers/sideBar";
import { useState, useRef, useEffect } from "react";
import CalypsoText from "../../assets/CalypsoText.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SearchButton from "../../assets/search-explore-white-icon-transparent-png-701751695037015aogz4s2rh6-removebg-preview.png";
import SearchBarMobile from "../../containers/mobile/SearchBarMobile";
import ITEMS from "../../data/items";
import AboutUs from "../about-us/AboutUs";
import ItemList from "../../containers/ItemList";
import CalypsoRed from "../../assets/CalypsoRed.png";

export default function Header({ props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const digital = ITEMS.filter((item) => item.subCategory === "DIGITAL");
  const keyboard = ITEMS.filter(
    (item) => item.subCategory == "KEYBOARD" && item.category !== "SONATA"
  );

  const acoustic = ITEMS.filter((item) => item.subCategory == "ACOUSTIC");
  const classic = ITEMS.filter((item) => item.subCategory == "CLASSIC");
  const electric = ITEMS.filter((item) => item.subCategory == "ELECTRIC");
  const electroAcoustic = ITEMS.filter(
    (item) => item.subCategory == "ELECTRO-ACOUSTIC"
  );
  const electroClassic = ITEMS.filter(
    (item) => item.subCategory == "ELECTRO-CLASSIC"
  );
  const guitalele = ITEMS.filter((item) => item.subCategory == "GUITALELE");
  const violin = ITEMS.filter((item) => item.subCategory == "VIOLIN");
  const viola = ITEMS.filter((item) => item.subCategory == "VIOLA");
  const cello = ITEMS.filter((item) => item.subCategory == "CELLO");
  const brass = ITEMS.filter((item) => item.category == "BRASS-WIND");
  const drumset = ITEMS.filter((item) => item.subCategory == "DRUMSET");
  const marching = ITEMS.filter((item) => item.subCategory == "MARCHING");
  const oriental = ITEMS.filter((item) => item.subCategory == "ORIENTAL");
  const banjo = ITEMS.filter((item) => item.subCategory == "BANJO");
  const handpan = ITEMS.filter((item) => item.subCategory == "HANDPAN");
  const tongue = ITEMS.filter((item) => item.subCategory == "TONGUE");
  const cuatro = ITEMS.filter((item) => item.subCategory == "CUATRO");
  const bench = ITEMS.filter((item) => item.subCategory == "BENCH");
  const cable = ITEMS.filter((item) => item.subCategory == "CABLE");
  const stand = ITEMS.filter((item) => item.subCategory == "STAND");
  const other = ITEMS.filter((item) => item.subCategory == "OTHER");

  const toggleSearchBar = () => {
    setIsSearchBarOpen((prev) => !prev);
  };

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-header">
        <header>
          <HamburgerButton onHover={toggleSidebar} isOpen={isSidebarOpen} />
          <div className="logos">
            <Link to="/" className="calypso-logo">
              <img src={CalypsoFlag} width="80rem" height="80rem" />
            </Link>
            <img
              src={CalypsoText}
              style={{
                width: "16rem",
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
        </header>

        <div className="sticky-nav">
          <ul className="dropdown-menu">
            <li>
              <img src={CalypsoRed} width="12rem" />
              <Link to={"/items/pianos"}>{t("pianos")}</Link>
              <ul className="dropdown-menu__submenu">
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/pianos#digitalPiano"}>
                    {t("digitalPiano")} &gt;
                  </Link>
                  <ul className="instruments">
                    {digital.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/pianos#keyboard"}>
                    {t("keyboard")} &gt;
                  </Link>
                  <ul className="instruments">
                    {keyboard.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <img src={CalypsoRed} width="12rem" />
              <Link to={"/items/guitar-bass"}>{t("guitars")}</Link>
              <ul className="dropdown-menu__submenu">
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/guitar-bass#acousticGuitar"}>
                    {t("acousticGuitar")} &gt;
                  </Link>
                  <ul className="instruments">
                    {acoustic.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/guitar-bass#electroAcoustic"}>
                    {t("electroAcoustic")} &gt;
                  </Link>
                  <ul className="instruments">
                    {electroAcoustic.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/guitar-bass#electric"}>
                    {t("electric")} &gt;
                  </Link>
                  <ul className="instruments">
                    {electric.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/guitar-bass#classicGuitar"}>
                    {t("classicGuitar")} &gt;
                  </Link>
                  <ul className="instruments">
                    {classic.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/guitar-bass#electroClassic"}>
                    {t("electroClassic")} &gt;
                  </Link>
                  <ul className="instruments">
                    {electroClassic.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/guitar-bass#guitalele"}>
                    {t("guitalele")} &gt;
                  </Link>
                  <ul className="instruments">
                    {guitalele.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <img src={CalypsoRed} width="12rem" />
              <Link to={"/items/orchestral-strings"}>{t("orchStrings")}</Link>
              <ul className="dropdown-menu__submenu">
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/orchestral-strings#violin"}>
                    {t("violin")}
                  </Link>
                  <ul className="instruments">
                    {violin.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/orchestral-strings#viola"}>
                    {t("viola")}
                  </Link>
                  <ul className="instruments">
                    {viola.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/orchestral-strings#cello"}>
                    {t("cello")}
                  </Link>
                  <ul className="instruments">
                    {cello.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <img src={CalypsoRed} width="12rem" />
              <Link to={"/items/brass-wind"}>{t("winds")}</Link>
              <ul className="dropdown-menu__submenu">
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/brass-wind#brass-wind"}>
                    {t("brass-wind")}
                  </Link>
                  <ul className="instruments">
                    {brass.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <img src={CalypsoRed} width="12rem" />
              <Link to={"/items/drums-percussion"}>{t("drums")}</Link>
              <ul className="dropdown-menu__submenu">
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/drums-percussion#drumset"}>
                    {t("drumset")}
                  </Link>
                  <ul className="instruments">
                    {drumset.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/drums-percussion#marching"}>
                    {t("marching")}
                  </Link>
                  <ul className="instruments">
                    {marching.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/drums-percussion#oriental"}>
                    {t("oriental")}
                  </Link>
                  <ul className="instruments">
                    {oriental.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <img src={CalypsoRed} width="12rem" />
              <Link to={"/items/special"}>{t("special")}</Link>
              <ul className="dropdown-menu__submenu">
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/special#banjo"}>{t("banjo")}</Link>
                  <ul className="instruments">
                    {banjo.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/special#handpan"}>{t("handpan")}</Link>
                  <ul className="instruments">
                    {handpan.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/special#tongue"}>{t("tongue")}</Link>
                  <ul className="instruments">
                    {tongue.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/special#cuatro"}>{t("cuatro")}</Link>
                  <ul className="instruments">
                    {cuatro.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <img src={CalypsoRed} width="12rem" />
              <Link to={"/items/accessories"}>{t("accessories")}</Link>
              <ul className="dropdown-menu__submenu">
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/accessories#bench"}>{t("bench")}</Link>
                  <ul className="other">
                    {bench.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/accessories#cable"}>{t("cable")}</Link>
                  <ul className="other">
                    {cable.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/accessories#stand"}>{t("stand")}</Link>
                  <ul className="other">
                    {stand.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
                <li>
                  <img src={CalypsoRed} width="12rem" />
                  <Link to={"/items/accessories#other"}>{t("other")}</Link>
                  <ul className="other">
                    {other.map((item) => {
                      return <ItemList item={item} />;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
