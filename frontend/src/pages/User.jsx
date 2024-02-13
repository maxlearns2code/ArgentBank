import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "/src/components/Account";
import { login } from "/src/redux/features/authSlice";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const fetchProfile = async () => {
    await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(login(data.body));
      });
      if (!sessionStorage.getItem("authToken")) {
        window.location = "/signin";
      }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user && user.firstName}  {user && user.lastName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        text="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        text="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        text="Current Balance"
      />
    </main>
  );
};

export default User;
