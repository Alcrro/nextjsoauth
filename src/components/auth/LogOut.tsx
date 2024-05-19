"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

export default function LogOut() {
  const logOutHandler = () => {
    signOut();

    redirect("/");
  };
  return (
    <li onClick={logOutHandler} className="cursor-pointer">
      Log Out
    </li>
  );
}
