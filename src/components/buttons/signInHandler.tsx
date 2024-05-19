import { signIn } from "next-auth/react";

export default function signInHandler(provider: string | undefined) {
  signIn(provider);

  return signInHandler;
}
