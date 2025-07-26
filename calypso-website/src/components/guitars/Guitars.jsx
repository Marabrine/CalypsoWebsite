import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";

function Guitars({ props }) {
  const { t } = useTranslation();
  const acoustic = props.filter((item) => item.subCategory === "ACOUSTIC");
  const electroAcoustic = props.filter(
    (item) => item.subCategory === "ELECTRO-ACOUSTIC"
  );
  const classic = props.filter((item) => item.subCategory === "CLASSIC");
  const electroClassic = props.filter(
    (item) => item.subCategory === "ELECTRO-CLASSIC"
  );
  const guitalele = props.filter((item) => item.subCategory === "GUITALELE");
  const electric = props.filter((item) => item.subCategory === "ELECTRIC");
  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title">{t("acousticGuitar")}</h1>
        <ul className="items-display guitar">
          {acoustic.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("electroAcoustic")}</h1>
        <ul className="items-display guitar">
          {electroAcoustic.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("electric")}</h1>
        <ul className="items-display guitar">
          {electric.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("classicGuitar")}</h1>
        <ul className="items-display guitar">
          {classic.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("electroClassic")}</h1>
        <ul className="items-display guitar">
          {electroClassic.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("guitalele")}</h1>
        <ul className="items-display guitar">
          {guitalele.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Guitars;
