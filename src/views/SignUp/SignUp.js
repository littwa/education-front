import React, { useState } from "react";
import style from "./SignUp.module.css";
import axios from "axios";
import authOperation from "../../redux/auth/authOperation";
import { connect } from "react-redux";

// const FormData = require("form-data");

const SignUp = ({ onSignUp, user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const change = set => e => set(e.target.value);
  const submit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", file);
    // console.log(111, formData);
    // console.log(333, file);
    // console.log(555, formData.getAll("avatar"));
    onSignUp(formData);
    // axios({
    //   method: "post",
    //   url: "/users",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then(resp => console.log(1, resp))
    //   .catch(err => console.log(err.response));

    setName("");
    setEmail("");
    setPassword("");
    setFile("");
    e.target.reset();
  };

  return user.status === "Not Verified" ? (
    <p>A verification link was sent to the mail: {user.email}</p>
  ) : (
    <form onSubmit={submit} className={style.form}>
      <h4>Register form</h4>
      <input
        type="text"
        name="name"
        value={name}
        onChange={change(setName)}
        placeholder="Name"
        autoComplete="off"
        className={style.input}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={change(setEmail)}
        placeholder="Email"
        className={style.input}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={change(setPassword)}
        placeholder="Password"
        className={style.input}
      />

      <input
        type="file"
        name="file"
        onChange={e => setFile(e.target.files[0])}
        accept=".jpg, .jpeg, .png"
        multiple
        className={style.input}
      />
      <button type="submit" className={style.input}>
        Sign Up!
      </button>
    </form>
  );
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { onSignUp: authOperation.signUp };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
