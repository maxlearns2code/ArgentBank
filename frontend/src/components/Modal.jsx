import { useDispatch, useSelector } from "react-redux";
import { username } from "/src/redux/features/authSlice";
import { fetchUsername } from "../lib/data";

const Modal = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    editUsername();
    closeModal();
  };

  const editUsername = async () => {
    const response = await fetchUsername();
    console.log(response);
    if (response.status === 200) {
      dispatch(username(response.body.userName));
    }
  };

  const closeModal = () => {
    window.location = "/user";
  };
  const handleCancel = () => {
    closeModal();
  };

  return (
    <>
      <form className="modal">
        <h2 className="modal__title">Edit user info</h2>
        <div className="modal__wrapper">
          <label htmlFor="username" className="label-form">
            User name :
          </label>
          <input
            className="input_name_user"
            type="text"
            id="username"
            defaultValue={user && user.userName}
          />
        </div>
        <div className="modal__wrapper">
          <label htmlFor="firstname" className="label-form">
            First name :
          </label>
          <input
            className="input_name"
            type="text"
            id="firstname"
            defaultValue={user && user.firstName}
            disabled
          />
        </div>
        <div className="modal__wrapper">
          <label htmlFor="lastName" className="label-form">
            Last name :
          </label>
          <input
            className="input_name"
            type="text"
            id="lastname"
            defaultValue={user && user.lastName}
            disabled
          />
        </div>
        <div className="modal__buttons">
          <button className="modal__buttons--btn" type="submit" onClick={handleSubmit}>
            Save
          </button>
          <button className="modal__buttons--btn" type="submit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default Modal;
