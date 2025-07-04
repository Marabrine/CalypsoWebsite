import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";

function Orchestral({ props }) {
  const { t } = useTranslation();
  const violins = props.filter((item) => item.subCategory === "VIOLIN");
  const violas = props.filter((item) => item.subCategory === "VIOLA");
  const celli = props.filter((item) => item.subCategory === "CELLO");

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title">{t("violin")}</h1>
        <ul className="items-display">
          {violins.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("viola")}</h1>
        <ul className="items-display">
          {violas.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("cello")}</h1>
        <ul className="items-display">
          {celli.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Orchestral;
