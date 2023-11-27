"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import "./navbar.css";

const NavBar = () => {

  return (
    <div className="navBar" >
      <Link href={'/'}><h1>Vorttex Gaming</h1></Link>
      <div className="sections">
        <Link href={'/'}><h2 className="inicioNavBar">INICIO</h2></Link>
        <div className="pointerNone"></div>
        <ul>
          <Link href={'/'}><li><FaShoppingCart /></li></Link>
          <Link href={'/register'}><li><FaUser /></li></Link>
          <Link href={'/'}><li><FaBars /></li></Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
