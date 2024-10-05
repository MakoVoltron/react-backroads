const PageLink = ({ href, type, text }) => {
  return (
    <li>
      <a href={href} className={type + "-link"}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
