import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";
import { useScroll } from "../../hooks/useScroll";

function BrassAndWind({ props }) {
  const { t } = useTranslation();
  useScroll();

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
