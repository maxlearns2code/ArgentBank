import PropTypes from "prop-types";

const Feature = (props) => (
  <div className="feature__item">
    <img src={props.img} alt={props.alt} className="feature__icon" />
    <h3 className="feature__item--title">{props.title}</h3>
    <p>{props.text}</p>
  </div>
);

Feature.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;
