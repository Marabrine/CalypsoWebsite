import Header from "../components/header/Header";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div>
      <Header />
      <h1 className="error-msg">Page Introuvable!</h1>
    </div>
  );
}
