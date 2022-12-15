import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header>
        <div className="Navbar">
          <div className="click-bar">
            <div className="i-con" onClick={() => setShow(!show)}>
              {show ? <RxCross2 /> : <FaBars />}
            </div>
            <h2>Vue</h2>
          </div>
          <nav className="desktop-nav">
            <ul>
              <li>Home</li>
              <li>shop</li>
              <li>product</li>
              <li>blog</li>
              <li>Product</li>
              <li>contect</li>
            </ul>
          </nav>
        </div>
        <div className="new-arr">
          <h1>New Arrivals</h1>
          <div className="price">$56.00</div>
          <div className="button">
            <button className="new">New</button>
            <button className="collection">Collection</button>
          </div>
        </div>
        <nav className={show ? "hide" : "mobile-nav"}>
          <ul>
            <li>Home</li>
            <li>shop</li>
            <li>product</li>
            <li>blog</li>
            <li>Product</li>
            <li>contect</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
