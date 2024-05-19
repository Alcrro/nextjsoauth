"use client";
import React from "react";
import LoginButton from "./LoginButton";
import credentialsLoginImage from "../../../public/box-arrow-in-right.svg";
export default function CredentialsLoginButton() {
  return (
    <LoginButton
      provider="credentials"
      image={credentialsLoginImage}
      description="Login"
    />
  );
}
