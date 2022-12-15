import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";

const NavImg = () => {
  return (
    <>
      <div className="img-head">
        <img src="/img/header-img.jpg" alt="nav-pic" />
        <div className="icon">
          <div className="i-con1">
            <AiOutlineFileSearch />
          </div>
          <div className="i-con2">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavImg;
