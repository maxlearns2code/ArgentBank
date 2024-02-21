import HeaderLogo from "/src/assets/argentBankLogo.webp";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";

const Menu = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    sessionStorage.removeItem("authToken")
    dispatch(logout());
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
          &nbsp;{user.userName}
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
