import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";

function BrassAndWind({ props }) {
  const { t } = useTranslation();

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title">{t("brass-wind")}</h1>
        <ul className="items-display">
          {props.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default BrassAndWind;
