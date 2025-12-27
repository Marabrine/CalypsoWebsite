import "../Accessories.css";
import { useTranslation } from "react-i18next";
import Item from "../item/Item";

function Drums({ props }) {
  const { t } = useTranslation();
  const drumset = props.filter((item) => item.subCategory === "DRUMSET");
  const marching = props.filter((item) => item.subCategory === "MARCHING");
  const oriental = props.filter((item) => item.subCategory === "ORIENTAL");

  useScroll();

  return (
    <div className="accessories-body">
      <div className="accessories-section">
        <h1 className="items-title" id="drumset">
          {t("drumset")}
        </h1>
        <ul className="items-display drums">
          {drumset.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="marching">
          {t("marching")}
        </h1>
        <ul className="items-display drums">
          {marching.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title" id="oriental">
          {t("oriental")}
        </h1>
        <ul className="items-display drums">
          {oriental.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Drums;
