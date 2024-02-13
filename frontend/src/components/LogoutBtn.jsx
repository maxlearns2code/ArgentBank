const LogoutBtn = () => {
  return (
    <div>
      <a className="main-nav-item" href="/user">
        <i className="fa fa-user-circle"></i>
        &nbsp;Tony
      </a>
      <a className="main-nav-item" href="/">
        <i className="fa fa-sign-out"></i>
        &nbsp;Sign Out
      </a>
    </div>
  );
};

export default LogoutBtn;
