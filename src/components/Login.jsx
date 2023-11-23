import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState({ status: false, msg: "" });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      console.log(login);
      setLogin({
        email: "",
        password: "",
      });
      navigate('/dashboard')
    } else {
      setError({ status: true, msg: "All fields are required" });
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    setLogin((prevLogin)=>({
      ...prevLogin,
      [name]:value
    }))
    
  };

  return (
    <>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="flex border m-2">
          <label htmlFor="email" className="m-1 px-2 py-1 bg-gray-50 rounded">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={login.email}
            onChange={handleChange}
            className="bg-gray-100 m-1 px-2 focus:outline-none w-full rounded"
          />
        </div>
        <div className="flex border m-2">
          <label htmlFor="password" className="m-1 px-2 py-1 bg-gray-50 rounded">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={login.password}
            onChange={handleChange}
            className="bg-gray-100 m-1 px-2 focus:outline-none w-full rounded"
          />
        </div>

        {/* Forgot Password link */}
        <Link to="/reset-email/" className="underline px-2 py-1 m-1">
          Forgot password ?
        </Link>

        {/* Login Button */}
        <div className="text-center">
          <button type="submit" className="m-1 px-2 py-1 bg-blue-400 rounded text-white">
            Login
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error.status ? <h1 className="text-xl font-bold rounded bg-slate-200 text-red-400">{error.msg}</h1> : ""}
    </>
  );
};

export default Login;
