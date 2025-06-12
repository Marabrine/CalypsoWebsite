import "./Accessories.css";
import { useTranslation } from "react-i18next";

function Accessories({ props }) {
  const { t } = useTranslation();
  const benches = props.filter((item) => item.subCategory === "BENCH");

  return (
    <div className="accessories-body">
      <div>
        <h1 className="items-title">{t("bench")}</h1>
        <ul className="items-display">
          {benches.map((item) => {
            return (
              <li key={item.id} className="items-display__item">
                <img src={item.pictureUrl} width="200px" height="200px" />
                <h3 className="item-name">{item.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1 className="items-title">{t("bench")}</h1>
        <ul className="items-display">
          {items.map((item) => {
            return (
              <li key={item.id} className="items-display__item">
                <img src={item.pictureUrl} width="200px" height="200px" />
                <h3 className="item-name">{item.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Accessories;
