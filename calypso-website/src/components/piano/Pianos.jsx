import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Pianos({ props }) {
  const { t } = useTranslation();
  const digital = props.filter((item) => item.subCategory === "DIGITAL");
  const keyboard = props.filter((item) => item.subCategory === "KEYBOARD");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title" id="digitalPiano">
          {t("digitalPiano")}
        </h1>
        <ul className="items-display piano">
          {digital.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div className="accessories-section">
        <h1 className="items-title" id="keyboard">
          {t("keyboard")}
        </h1>
        <ul className="items-display piano">
          {keyboard.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Pianos;
