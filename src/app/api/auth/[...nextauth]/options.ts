import { getServerSession, NextAuthOptions, Profile } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

type IUserProp = {
  id: number;
  username: string;
  password: string;
};

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "",
        },
      },
      // @ts-ignore
      authorize: async (credentials: IUserProp) => {
        //This is where you need to retrieve user data
        // to verify with credentials

        try {
          const user = { id: 0, name: "test", password: "test" };
          if (
            credentials?.username === user.name ||
            credentials?.password === user.password
          ) {
            return user;
          } else {
            return null;
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
