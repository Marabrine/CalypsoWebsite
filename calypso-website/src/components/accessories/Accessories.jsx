import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Accessories({ props }) {
  const { t } = useTranslation();
  const benches = props.filter((item) => item.subCategory === "BENCH");
  const cables = props.filter((item) => item.subCategory === "CABLE");
  const stands = props.filter((item) => item.subCategory === "STAND");
  const other = props.filter((item) => item.subCategory === "OTHER");
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
        <h1 className="items-title" id="bench">
          {t("bench")}
        </h1>
        <ul className="items-display accessories">
          {benches.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="cable">
          {t("cable")}
        </h1>
        <ul className="items-display accessories">
          {cables.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="stand">
          {t("stand")}
        </h1>
        <ul className="items-display accessories">
          {stands.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="other">
          {t("other")}
        </h1>
        <ul className="items-display accessories">
          {other.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Accessories;
