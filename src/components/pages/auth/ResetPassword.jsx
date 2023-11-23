import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState({ password: "", confirm_password: "" });
  const [error, setError] = useState({ status: false, msg: "" });
  const handleSubmit = () => {
    if (password.password && password.confirm_password) {
      if (password.password === password.confirm_password) {
        setError({ status: false, msg: "Password Reset Successfully" });
        navigate("/login");
      }
      else{
        setError({ status: true, msg: "password and confirm password does not matched" });
      }
    } else {
      setError({ status: true, msg: "All fields are required" });
    }
  };


  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container px-4">
        <form id="password-reset" onSubmit={handleSubmit}>
          {/* password */}
          <div className="flex border m-2">
            <label htmlFor="password" className="m-1 px-2 py-1 bg-gray-50 rounded w-[20%]">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password.password}
              onChange={handleChange}
              className="bg-gray-100 m-1 px-2 focus:outline-none w-full rounded"
            />
          </div>

          {/* confirm password */}
          <div className="flex border m-2">
            <label htmlFor="password" className="m-1 px-2 py-1 bg-gray-50 rounded w-[20%]">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={password.confirm_password}
              onChange={handleChange}
              className="bg-gray-100 m-1 px-2 focus:outline-none w-full rounded"
            />
          </div>

          {/* Reset Button */}
          <div className="text-center">
            <button type="submit" className="m-1 px-2 py-1 bg-blue-400 rounded text-white">
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* Error Message */}
      {error.status ? <h1 className="text-xl font-bold rounded bg-slate-200 text-red-400">{error.msg}</h1> : ""}
    </>
  );
};

export default ResetPassword;
