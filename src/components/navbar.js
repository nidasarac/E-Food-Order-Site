import React from "react";
import "../styles/navbar.css";

const Navbar = ({setShow, size}) => {
    return (
        <nav>
            <div className="nav_box">
                    <span className="nida_burger" onClick={()=>setShow(true)}>
                    NIDA BURGER
                    </span>
                <div className="cart" onClick={()=>setShow(false)}>
                    <span>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span>    {size}</span>
                </div>
            </div>
        </nav>
    );   
};

export default Navbar;
