import React from "react";
import "./navbar.scss";
import Profile from "./profile/Profile";
import Login from "./login/Login";
import Link from "next/link";
export default function Navbar() {
  const menu = ["profile", "favorite", "login"];
  return (
    <nav className="p-3">
      <div className="navbar-container flex justify-between">
        <div className="logo">
          <Link href={"/"}>
            <span>ALCRRO</span>
          </Link>
        </div>
        <div className="menu-container">
          <ul className="flex gap-4">
            {menu.map((item, key) =>
              item === "profile" ? (
                <Profile key={key} />
              ) : item === "login" ? (
                <Login key={key} />
              ) : (
                <li key={key}>
                  <Link href={`/${item}`}>
                    <span>
                      {item.charAt(0).toLocaleUpperCase() + item.slice(1)}
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
