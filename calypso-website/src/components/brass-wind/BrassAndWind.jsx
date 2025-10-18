import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BrassAndWind({ props }) {
  const location = useLocation();
  const { t } = useTranslation();
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
        <h1 className="items-title" id="brass-wind">
          {t("brass-wind")}
        </h1>
        <ul className="items-display brass">
          {props.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default BrassAndWind;
