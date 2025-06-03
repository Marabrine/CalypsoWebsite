import "./hamburgerMenu.css";

function HamburgerButton({ onHover }) {
  return (
    <button className="hamburger" onMouseEnter={onHover} aria-label="Menu">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
}
export default HamburgerButton;
