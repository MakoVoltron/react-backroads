const SocialLink = ({ aClass, href, fa_class }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={aClass}>
        <i className={fa_class}></i>
      </a>
    </li>
  );
};
export default SocialLink;
