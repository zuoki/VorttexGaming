"use client";
import Link from "next/link";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import "./navbar.css";
import { UserButton, useUser } from "@clerk/nextjs";
import vLogo from "./vortexLogo.png";
import Image from "next/image";

const NavBar = () => {
  const user = useUser();
  const isLogin = user?.isSignedIn;

  return (
    <div className="navBar">
      <Link href={"/"}>
        <Image className="imgLogoNavbar" src={vLogo} />
      </Link>
      <div className="sections">
        <Link href={"/"}>
          <h2 className="inicioNavBar">HOME</h2>
        </Link>
        <div className="pointerNone"></div>
        <ul>
          <Link href={"/cart"}>
            <li>
              <FaShoppingCart />
            </li>
          </Link>
          {isLogin ? (
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          ) : (
            <Link href={"/sign-in"}>
              <li>
                <FaUser />
              </li>
            </Link>
          )}
          <Link href={"/panelAdmin"}>
            <li>
              <FaBars />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
