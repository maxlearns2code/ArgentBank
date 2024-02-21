import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Account from "/src/components/Account";
import { login } from "/src/redux/features/authSlice";
import { fetchProfile } from "../lib/data";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const getProfile = async () => {
    const response = await fetchProfile();
    console.log(response);
    if (response.status === 200) {
      dispatch(login(response.body));
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user && user.firstName} {user && user.lastName}!
        </h1>
        <button className="edit-button" onClick={openModal}>
          Edit Name
        </button>
        {isOpen && (
          <div className="modal__container">
            <Modal />
          </div>
        )}
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
