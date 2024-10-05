import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks
        ulClass="footer-links"
        ulId="footer-links"
        itemClass="footer-link"
      />

      <SocialLinks ulClass="footer-icons" iconClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
