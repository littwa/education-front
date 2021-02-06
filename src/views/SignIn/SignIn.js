import { useState } from "react";
import style from "./SignIn.module.css";
import authOperation from "../../redux/auth/authOperation";
import { connect } from "react-redux";

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const change = set => e => set(e.target.value);
  const submit = e => {
    console.log(888, { email, password });
    e.preventDefault();
    onSignIn({ email, password });
  };

  return (
    <form onSubmit={submit} className={style.form}>
      <h4>Login form</h4>
      <input
        type="email"
        value={email}
        onChange={change(setEmail)}
        placeholder="Email"
        className={style.input}
      />
      <input
        type="password"
        value={password}
        onChange={change(setPassword)}
        placeholder="Password"
        className={style.input}
      />
      <div>
        <button className={style.btn} type="submit">
          Submit
        </button>
        <button className={style.btn} type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};

// const mapStateToProps
const mapDispatchToProps = { onSignIn: authOperation.signIn };

export default connect(null, mapDispatchToProps)(SignIn);
