import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ ulClass, ulId, itemClass }) => {
  return (
    <ul className={ulClass} id={ulId}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
