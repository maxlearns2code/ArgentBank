import { useDispatch } from "react-redux";
import { username } from "/src/redux/features/authSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    editUsername();
    closeModal();
  };

  const editUsername = async () => {
    await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({
        userName: document.getElementById("username").value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(username(data.body.userName));
        console.log(username(data.body.userName));
      });
  };

  const closeModal = () => {
    window.location = "/user";
  };
  return (
    <>
      <form className="modal" onSubmit={handleSubmit}>
        <div className="modal__wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <button className="modal__btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Modal;
