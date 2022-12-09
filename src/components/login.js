import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/api";

export default function Login() {
  //  <h1 className="text-center">LOGIN PAGE</h1>
  //     <div className="text-center">
  //       <h1 className="">Title</h1>
  //       <div className="App">
  //         <header className="App-header">
  //           <p>{!data ? "Loading... " : data}</p>
  //         </header>
  //       </div>
  //     </div>
  const initialValue = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialValue);

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    console.log(data);

    const res = await login(data);
    const body = await res.json();
    console.log(body);
  }

  return (
    <div style={{ height: "59vh" }} className="login">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="text"
            id="email"
            className="form-control"
            onChange={onChange}
            value={data.email}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="text"
            id="password"
            className="form-control"
            onChange={onChange}
            value={data.password}
            required
          ></input>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-secondary">
            SIGN IN
          </button>
          <Link className="d-block" to="/register">
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
}
