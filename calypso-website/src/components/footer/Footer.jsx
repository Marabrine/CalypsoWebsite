import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CalypsoText from "../../assets/CalypsoText.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-body">
      <footer>
        <Link to={"/about-us"}>{t("about-us")}</Link>
        <Link to={"/contact"}>{t("contact")}</Link>
        <img
          src={CalypsoText}
          style={{
            width: "16rem",
            height: "auto",
          }}
          className="calypso-text__footer"
        />
      </footer>
    </div>
  );
}
export default Footer;
