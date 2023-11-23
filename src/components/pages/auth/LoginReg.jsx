import React, { useState } from "react";
import shopping from "/img/shopping.png";
import Login from "../../Login";
import Registration from "../../Registration";

const LoginReg = () => {
  const [activeButton, setActiveButton] = useState("login");
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={shopping} alt="Shopping" />
      </div>

      <div className="border">
        <nav className="flex">
          <button
            className={`m-1 p-1 font-semibold  uppercase ${
              activeButton === "login" ? "border-b-2 border-blue-300 transition-all duration-500" : ""
            }`}
            onClick={() => setActiveButton("login")}
          >
            Login
          </button>
          <button
            className={`m-1 p-1 font-semibold  uppercase ${
              activeButton === "register" ? "border-b-2 border-blue-300 transition-all duration-500" : ""
            }`}
            onClick={() => setActiveButton("register")}
          >
            Register
          </button>
        </nav>
        {activeButton === "login" ? <Login /> : <Registration />}
      </div>
    </div>
  );
};

export default LoginReg;
