const handleSubmit = async (e) => {
  e.preventDefault();
  redirection();
};

// add function redirection by API
async function redirection() {
  let baliseUsername = document.getElementById("username");
  let emailValue = baliseUsername.value;

  let balisePassword = document.getElementById("password");
  let passwordValue = balisePassword.value;

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
    sessionStorage.setItem('authToken', result.token);
    //redirection
    window.location = "/user";
  } else {
    //alert
    const alert = document.querySelector(".alert");
    alert.style.display = null;
    const alertBtn = document.querySelector(".alertBtn");
    alertBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location = "/signin";
    });
  }
}

const Form = () => {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" onClick={handleSubmit}>
        Sign In
      </button>
    </form>
  );
};

export default Form;
