import { signIn } from "next-auth/react";

export default async function signInHandler(provider: string | undefined) {
  signIn(provider);

  return signInHandler;
}
