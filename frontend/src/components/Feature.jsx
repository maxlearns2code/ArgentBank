import PropTypes from "prop-types";

const Feature = ({ img, alt, title, text }) => (
  <div className="feature-item">
    <img src={img} alt={alt} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{text}</p>
  </div>
);

Feature.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;
