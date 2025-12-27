import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";
import { useEffect } from "react";
import { useScroll } from "../../hooks/useScroll";

function Orchestral({ props }) {
  const { t } = useTranslation();
  const violins = props.filter((item) => item.subCategory === "VIOLIN");
  const violas = props.filter((item) => item.subCategory === "VIOLA");
  const celli = props.filter((item) => item.subCategory === "CELLO");
  useScroll();

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title" id="violin">
          {t("violin")}
        </h1>
        <ul className="items-display orchestral">
          {violins.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="viola">
          {t("viola")}
        </h1>
        <ul className="items-display orchestral">
          {violas.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="cello">
          {t("cello")}
        </h1>
        <ul className="items-display orchestral">
          {celli.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Orchestral;
