import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";
import { useScroll } from "../../hooks/useScroll";

function Special({ props }) {
  const { t } = useTranslation();
  const banjo = props.filter((item) => item.subCategory === "BANJO");
  const handpan = props.filter((item) => item.subCategory === "HANDPAN");
  const tongue = props.filter((item) => item.subCategory === "TONGUE");
  const cuatro = props.filter((item) => item.subCategory === "CUATRO");
  useScroll();

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title" id="banjo">
          {t("banjo")}
        </h1>
        <ul className="items-display special">
          {banjo.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="handpan">
          {t("handpan")}
        </h1>
        <ul className="items-display special">
          {handpan.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="tongue">
          {t("tongue")}
        </h1>
        <ul className="items-display special">
          {tongue.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="cuatro">
          {t("cuatro")}
        </h1>
        <ul className="items-display special">
          {cuatro.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Special;
