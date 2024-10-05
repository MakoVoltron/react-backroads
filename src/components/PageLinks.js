import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ type }) => {
  return (
    <ul className={type + "-links"} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} />;
      })}
    </ul>
  );
};
export default PageLinks;
