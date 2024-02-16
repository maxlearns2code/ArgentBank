/* istanbul ignore file */
import PropTypes from "prop-types";

const Icon = ({ name }) => {
  let icon;
  switch (name) {
    case "close":
      icon = (
        <>
          <rect width="36" height="36" fill="white" />
          <path
            d="M18.8911 17.5175L25.0208 11.3975C25.204 11.2143 25.3069 10.9658 25.3069 10.7067C25.3069 10.4476 25.204 10.1991 25.0208 10.0159C24.8376 9.83267 24.5891 9.72974 24.33 9.72974C24.0709 9.72974 23.8224 9.83267 23.6392 10.0159L17.5192 16.1456L11.3992 10.0159C11.2159 9.83267 10.9675 9.72974 10.7084 9.72974C10.4492 9.72974 10.2008 9.83267 10.0175 10.0159C9.83433 10.1991 9.7314 10.4476 9.7314 10.7067C9.7314 10.9658 9.83433 11.2143 10.0175 11.3975L16.1473 17.5175L10.0175 23.6375C9.92634 23.728 9.85396 23.8356 9.80456 23.9541C9.75517 24.0727 9.72974 24.1999 9.72974 24.3283C9.72974 24.4568 9.75517 24.5839 9.80456 24.7025C9.85396 24.8211 9.92634 24.9287 10.0175 25.0191C10.108 25.1103 10.2156 25.1827 10.3342 25.2321C10.4527 25.2815 10.5799 25.3069 10.7084 25.3069C10.8368 25.3069 10.964 25.2815 11.0825 25.2321C11.2011 25.1827 11.3087 25.1103 11.3992 25.0191L17.5192 18.8894L23.6392 25.0191C23.7296 25.1103 23.8372 25.1827 23.9558 25.2321C24.0744 25.2815 24.2015 25.3069 24.33 25.3069C24.4584 25.3069 24.5856 25.2815 24.7042 25.2321C24.8227 25.1827 24.9303 25.1103 25.0208 25.0191C25.112 24.9287 25.1844 24.8211 25.2338 24.7025C25.2832 24.5839 25.3086 24.4568 25.3086 24.3283C25.3086 24.1999 25.2832 24.0727 25.2338 23.9541C25.1844 23.8356 25.112 23.728 25.0208 23.6375L18.8911 17.5175Z"
            fill="#12002b"
          />
        </>
      );
      break;
    default:
      icon = null;
  }
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;