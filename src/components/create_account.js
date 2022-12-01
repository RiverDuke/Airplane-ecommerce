import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/api";

export default function Login() {
  const initialValue = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
    console.log(body.data.data);
  }

  return (
    <div style={{ height: "75vh" }} className="login">
      <h1 className="createTitle">Create Account</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            className="form-control"
            onChange={onChange}
            value={data.firstName}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            id="lastName"
            className="form-control"
            onChange={onChange}
            value={data.lastName}
            required
          ></input>
        </div>
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
          <Link className="d-block" to="/login">
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}
