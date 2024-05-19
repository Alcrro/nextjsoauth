"use client";
import { credentialSignInHandler } from "@/components/buttons/credentialSignInHandler";
import CredentialsLoginButton from "@/components/buttons/CredentialsLoginButton";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CredentialsForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<any>(null);
  const [password, setPassword] = useState<any>(null);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => credentialSignInHandler(e, name, password)}
    >
      <div className="form-group flex flex-col justify-center align-middle text-center gap-2">
        <label htmlFor="">Add a name</label>
        <input
          type="text"
          className="rounded-lg p-2"
          name="name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <div className="form-group flex flex-col justify-center align-middle text-center gap-2">
        <label htmlFor="">Add a password</label>
        <input
          type="password"
          className="rounded-lg p-2"
          name="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <CredentialsLoginButton />
    </form>
  );
}
