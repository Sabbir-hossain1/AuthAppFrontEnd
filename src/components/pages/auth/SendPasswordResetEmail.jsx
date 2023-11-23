import React, { useState } from "react";

const SendPasswordResetEmail = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e)=>{
    setEmail(e.target.value)
  }
  return (
    <>
    <div className="border m-4 px-4 flex flex-col justify-center items-center">
      <div className="flex m-2 p-2">
        <label htmlFor="resetEmail" className="bg-gray-100 px-2 rounded p-2 mr-2">Email:</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={email} className="bg-gray-200 p-2 border border-black focus:outline-none"/>
      </div>
      <div>
        <button className="bg-blue-400 m-1 p-1 px-4 rounded">Send</button>
      </div>
      </div>
    </>
  );
};

export default SendPasswordResetEmail;
