import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnaction, setButAction] = useState("Login");
  return (
    <div className="flex justify-between">
      <div>
        <img
          className="w-24"
          src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
          alt="logo"
        ></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/Gorcery">Gorcery</Link>
          </li>
          <button
            onClick={() =>
              btnaction === "Login"
                ? setButAction("Logout")
                : setButAction("Login")
            }
          >
            {btnaction}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
