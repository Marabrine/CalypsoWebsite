import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function RootLayout({ props }) {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header props={props} />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
