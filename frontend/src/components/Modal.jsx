const Modal = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    redirection();
  };

  // add function redirection by API
  async function redirection() {
    let emailValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;

    // add fetch API to validate authentification
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    if (response.ok) {
      //save token
      const result = await response.json();
      console.log(result.body.token);
      sessionStorage.setItem("authToken", result.body.token);
      //redirection
      window.location = "/user";
    } else {
      //alert
      const alert = document.querySelector(".alert");
      alert.style.display = null;
      const alertBtn = document.querySelector(".alert__btn");
      console.log(alertBtn);
      alertBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.location = "/signin";
      });
    }
  }
  return (
    <>
      <form className="modal" onSubmit={handleSubmit}>
        <div className="modal__wrapper">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" />
        </div>
        <div className="modal__wrapper">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" />
        </div>
        <button className="modal__btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Modal;
