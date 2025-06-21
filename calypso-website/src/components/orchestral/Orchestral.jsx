import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";

function Accessories({ props }) {
  const { t } = useTranslation();
  const benches = props.filter((item) => item.subCategory === "BENCH");
  const cables = props.filter((item) => item.subCategory === "CABLE");
  const stands = props.filter((item) => item.subCategory === "STAND");
  const other = props.filter((item) => item.subCategory === "OTHER");

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title">{t("bench")}</h1>
        <ul className="items-display">
          {benches.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("cable")}</h1>
        <ul className="items-display">
          {cables.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("stand")}</h1>
        <ul className="items-display">
          {stands.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Accessories;
