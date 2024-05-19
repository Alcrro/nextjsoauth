"use client";
import React from "react";
import googleImage from "../../../public/google.png";
import LoginButton from "./LoginButton";
import signInHandler from "./signInHandler";
export default function GoogleSignInButton() {
  return (
    <LoginButton
      handlerButton={signInHandler}
      provider="google"
      image={googleImage}
      description="Continue with Google"
    />
  );
}
