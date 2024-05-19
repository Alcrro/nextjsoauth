"use client";
import React from "react";
import githubImage from "../../../public/github.png";
import LoginButton from "./LoginButton";
import signInHandler from "./signInHandler";

export default function GithubSignInButton() {
  return (
    <LoginButton
      handlerButton={signInHandler}
      provider="github"
      image={githubImage}
      description="Continue with Github"
    />
  );
}
