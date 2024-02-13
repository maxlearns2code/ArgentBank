import LoginBtn from "../components/LoginBtn";
import LogoutBtn from "../components/LogoutBtn";
import HeaderLogo from "/src/assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Menu = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
          <LogoutBtn />
        ) : (
          <LoginBtn />
        )}
      
      
    </nav>
  );
}

export default Menu;
