import { useParams } from "react-router-dom";
import "./itemDetails.css";

function ItemDetails({ props }) {
  const { id } = useParams();
  const item = props.filter((item) => item.id === id);
  console.log(item);
  return <div>testing testing testing testing testing</div>;
}
export default ItemDetails;
