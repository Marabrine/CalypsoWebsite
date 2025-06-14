import "./Accessories.css";
import { useTranslation } from "react-i18next";

function Accessories({ props }) {
  const { t } = useTranslation();
  const benches = props.filter((item) => item.subCategory === "BENCH");
  const cables = props.filter((item) => item.subCategory === "CABLE");
  const stands = props.filter((item) => item.subCategory === "STAND");

  return (
    <div className="accessories-body">
      <div className="accessories-section">
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
        <h1 className="items-title">{t("cable")}</h1>
        <ul className="items-display">
          {cables.map((item) => {
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
        <h1 className="items-title">{t("stand")}</h1>
        <ul className="items-display">
          {stands.map((item) => {
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
