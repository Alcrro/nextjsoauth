import { signIn } from "next-auth/react";

export const credentialSignInHandler = async (
  e: any,
  name: string,
  password: string
) => {
  e.preventDefault();
  await signIn("credentials", {
    name: name,
    password: password,
    redirect: false,
  });
  
};
