import SocialLink from "./SocialLink";
import { socialLinks } from "../data";

const SocialLinks = ({ ulClass, iconClass }) => {
  return (
    <ul className={ulClass}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} aClass={iconClass} {...link} />;
      })}
    </ul>
  );
};
export default SocialLinks;
