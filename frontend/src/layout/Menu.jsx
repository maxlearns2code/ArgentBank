import HeaderLogo from "/src/assets/argentBankLogo.png";

const Menu = () => (
  <nav className="main-nav">
    <a className="main-nav__logo" href="/">
      <img
        className="main-nav__logo--image"
        src={HeaderLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
      <a className="main-nav__item" href="/signin">
        <i className="fa fa-user-circle"></i>
        &nbsp;Sign In
      </a>
    </div>
  </nav>
);

export default Menu;
