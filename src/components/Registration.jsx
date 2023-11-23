import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [registration, setRegistration] = useState({
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    tc: false,
  });
  const [error, setError] = useState({ status: false, msg: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      registration.email &&
      registration.password &&
      registration.confirm_password &&
      registration.name &&
      registration.tc
    ) {
      if (registration.password === registration.confirm_password) {
        navigate("/");
        setRegistration({
          email: "",
          password: "",
          confirm_password: "",
          name: "",
          tc: false,
        });
      } else {
        setError({ status: true, msg: "Password and Confirm password does not matched" });
      }
    } else {
      setError({ status: true, msg: "All fields are required" });
    }
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    console.log(registration);
  };

  return (
    <>
      <form id="registration-form" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="flex border m-2">
          <label htmlFor="email" className="m-1 px-2 py-1 bg-gray-50 rounded w-[20%]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={registration.email}
            onChange={handleChange}
            className="bg-gray-100 m-1 px-2 focus:outline-none w-full rounded"
          />
        </div>
        {/* password */}
        <div className="flex border m-2">
          <label htmlFor="password" className="m-1 px-2 py-1 bg-gray-50 rounded w-[20%]">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={registration.password}
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
            value={registration.confirm_password}
            onChange={handleChange}
            className="bg-gray-100 m-1 px-2 focus:outline-none w-full rounded"
          />
        </div>

        {/* name */}
        <div className="flex border m-2">
          <label htmlFor="name" className="m-1 px-2 py-1 bg-gray-50 rounded w-[20%]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="name"
            value={registration.name}
            onChange={handleChange}
            className="bg-gray-100 m-1 px-2 focus:outline-none w-full rounded"
          />
        </div>

        {/* Terms and Condition */}
        <label htmlFor="tc" className="flex border m-2 px-2 justify-start align-items-center">
          <input id="tc" type="checkbox" name="tc" checked={registration.tc} onChange={handleChange} className="mr-2" />
          I agree with terms and condition
        </label>

        {/* Registration Button */}
        <div className="text-center">
          <button type="submit" className="m-1 px-2 py-1 bg-blue-400 rounded text-white">
            Registration
          </button>
        </div>
      </form>
      {/* Error Message */}
      {error.status ? <h1 className="text-xl font-bold rounded bg-slate-200 text-red-400">{error.msg}</h1> : ""}
    </>
  );
};

export default Registration;
