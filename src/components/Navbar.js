import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} className="nav-logo" alt="backroads" />
          </a>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks ulClass="nav-links" ulId="nav-links" itemClass="nav-link" />
        <SocialLinks ulClass="nav-icons" iconClass="nav-icon" />
      </div>
    </nav>
  );
}
export default Navbar;
