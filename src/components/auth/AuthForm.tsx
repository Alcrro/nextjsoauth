import React from "react";
import GithubSignInButton from "../buttons/GithubSignInButton";
import GoogleSignInButton from "../buttons/GoogleSignInButton";
import CredentialsForm from "./credentialForm/CredentialsForm";

export default function AuthForm() {
  return (
    <div className="form-inner">
      <GithubSignInButton />
      <GoogleSignInButton />

      <div className="credentials-form-container">
        <CredentialsForm />
      </div>
    </div>
  );
}
