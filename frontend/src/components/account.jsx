import PropTypes from "prop-types";
import Button from "/src/components/Button";

const Account = (props) => (
  <section className="account">
    <div className="account__content--wrapper">
      <h3 className="account__title">{props.title}</h3>
      <p className="account__amount">{props.amount}</p>
      <p className="account__amount--description">{props.text}</p>
    </div>
    <div className="account__content--wrapper cta">
      <Button />
    </div>
  </section>
);

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Account;
