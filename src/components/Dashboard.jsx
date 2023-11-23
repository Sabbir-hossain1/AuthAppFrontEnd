import React from "react";

const Dashboard = () => {
  return (
    <div className="container m-4 px-4 border flex justify-center items-center">
      {/* user information */}
      <div className="m-2 p-4 bg-slate-300">
        <div className="">
          <h1 className="m-2">Email: Sabbir.csse.duet@gmaill.com</h1>
          <h1 className="m-2">Name: Sabbir Hossain</h1>
        </div>
        {/* logout */}
        <div>
          <button className="m-1 px-4 bg-orange-400 rounded">Logout</button>
        </div>
      </div>

      {/* Change password */}
      <div className="m-2 p-4 bg-slate-300">
        <h2>Change Password</h2>
        <input type="password" name="password" id="password" placeholder="New Password *" className="border w-full px-2 rounded m-2" />
        <input type="password" name="confirm_new_password" id="confirm_new_password" placeholder="Confirm New Password *" className="m-2 border w-full px-2 rounded" />
      </div>
    </div>
  );
};

export default Dashboard;
