import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";

function Pianos({ props }) {
  const { t } = useTranslation();
  const digital = props.filter((item) => item.subCategory === "DIGITAL");
  const keyboard = props.filter((item) => item.subCategory === "KEYBOARD");

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title">{t("digitalPiano")}</h1>
        <ul className="items-display piano">
          {digital.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div className="accessories-section">
        <h1 className="items-title">{t("keyboard")}</h1>
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
