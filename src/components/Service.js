const Service = ({ title, text, icon }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}saving money</h4>
        <p className="service-text">
          {text}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </div>
    </article>
  );
};
export default Service;
