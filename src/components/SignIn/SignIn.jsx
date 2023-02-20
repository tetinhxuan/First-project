import "./SignIn.scss";

function SignIn() {
  const clickLogin = (e) => {
    e.preventDefault();
    fetch("API Address", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          alert("You are logged in.");
          this.goToMain();
        } else {
          alert("Please check your login information.");
        }
      });
  };
  return (
    <form className="sign-form">
      <input
        className="login-info"
        id="id"
        type="text"
        placeholder="username"
      />
      <input
        className="login-info"
        //
        id="password"
        type="password"
        placeholder="Password"
      />
      <button
        className="login-button"
        // disabled={this.enableLoginButton()}
        // id={this.changeLoginButtonStyle()}
        type="submit"
        onClick={clickLogin}
      >
        Login
      </button>
    </form>

    // <Form className="sign-form">
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Username</Form.Label>
    //     <Form.Control type="text" placeholder="Enter username" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}

export default SignIn;
