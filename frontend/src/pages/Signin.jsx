import Form from "/src/components/Form";

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
        <Form />
      </section>
    </main>
  );
};

export default Signin;
