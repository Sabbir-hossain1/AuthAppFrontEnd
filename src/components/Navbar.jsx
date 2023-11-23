import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-fuchsia-700 flex justify-between p-4 text-white items-center">
      <div>
        <h1 className="text-2xl font-semibold">Authentication</h1>
      </div>
      <div className="flex">
        <NavLink
          to="/"
          className={`${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-red-400" : "")} mx-2 font-semibold p-2`}
        >
          Home
        </NavLink>
        <NavLink
          to="contacts/"
          className={`${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-red-400" : "")} mx-2 font-semibold p-2`}
        >
          Contacts
        </NavLink>

        <NavLink
          to="login/"
          className={`${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-red-400" : "")} mx-2 font-semibold p-2`}
        >
          Login
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
