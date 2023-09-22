import { useState } from "react";

const Header = () => {

    const [btnaction, setButAction] = useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg" alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => btnaction === 'Login' ? setButAction("Logout") : setButAction("Login")
                    }>{btnaction}</button>
                </ul>


            </div>
        </div>

    )
}

export default Header;