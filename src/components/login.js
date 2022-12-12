import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/api";

export default function Login() {
  const initialValue = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const res = await login(data);
      const body = await res.json();
      navigate("/account");
    } catch (err) {
      console.log(`there was an error: ${err}`);
      setError(true);
    }
  }

  function ErrorHandle() {
    if (error) {
      return (
        <div class="alert alert-danger" role="alert">
          Email or Password is incorrect
        </div>
      );
    } else {
      return null;
    }
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
        {/* abc */}
        <ErrorHandle />
        {/* abc */}
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
