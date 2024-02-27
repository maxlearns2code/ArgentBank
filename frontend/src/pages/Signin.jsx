import { redirect } from "react-router-dom";
import Formular from "/src/components/Formular";
import { redirection } from "/src/lib/data";

export async function action() {
  console.log("action");
  const response = await redirection();
  console.log(response);
  if (response.ok) {
    const result = await response.json();
    console.log(result.body.token);
    sessionStorage.setItem("authToken", result.body.token);
    return redirect("/user");
  } else {
    const alert = document.querySelector(".alert");
    alert.style.display = null;
    const alertBtn = document.querySelector(".alert__btn");
    console.log(alertBtn);
    alertBtn.addEventListener("click", (event) => {
      event.preventDefault();
      return redirect("/signin");
    });
  }
  return null;
}

const Signin = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <div className="alert" style={{ display: "none" }}>
          <p>Erreur dans l’identifiant ou le mot de passe</p>
          <button className="alert__btn">OK</button>
        </div>
        <Formular />
      </section>
    </main>
  );
};

export default Signin;
