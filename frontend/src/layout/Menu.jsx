import HeaderLogo from "/src/assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Menu = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogout = () => {
    sessionStorage.removeItem("authToken")
    isLoggedIn(false);
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav__logo" to="/">
        <img
          className="main-nav__logo--image"
          src={HeaderLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isLoggedIn ? (
        <div>
        <Link className="main-nav__item" to="/user">
          <i className="fa fa-user-circle"></i>
          &nbsp;Tony
        </Link>
        <Link className="main-nav__item" to="/" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          &nbsp;Sign Out
        </Link>
      </div>
        ) : (
          <div>
      <Link className="main-nav__item" to="/signin">
        <i className="fa fa-user-circle"></i>
        &nbsp;Sign In
      </Link>
    </div>
        )}
      
      
    </nav>
  );
}

export default Menu;
