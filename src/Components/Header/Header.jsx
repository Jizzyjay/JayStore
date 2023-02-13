import React, { useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { GrCart } from "react-icons/gr";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [show, setShow] = useState(true);

  const toggleMenu = () => {
    setShow((show) => !show);
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span> JayStore</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>
        {/* <div className={css.menu}> */}
        <ul className={css.menu} style={{ display: show ? "inherit" : "none" }}>
          <li>Collections</li>
          <li>Brands</li>
          <li>Sales</li>
          <li>New</li>
          <li>ENG</li>
        </ul>
        {/* </div> */}

        <input type="text" className={css.search} placeholder="Search" />
        <GrCart className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
