import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnaction, setButAction] = useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg" alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button onClick={() => btnaction === 'Login' ? setButAction("Logout") : setButAction("Login")
                    }>{btnaction}</button>
                </ul>


            </div>
        </div>

    )
}

export default Header;