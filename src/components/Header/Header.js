import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";

import "./Header.css"

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <Link to='/' className='header__store-title'>
                    Game Store
                </Link >
                <div className="wrapper header__cart-btn-wrapper">
                    <CartBlock  />
                </div>
            </div>
        </header>
    );
}

export default Header;