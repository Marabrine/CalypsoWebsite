import "./hamburgerMenu.css";

function HamburgerButton({ onHover, isOpen }) {
  return (
    <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={onHover}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
}
export default HamburgerButton;
