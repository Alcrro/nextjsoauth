import LogOut from "../../../components/auth/LogOut";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

export default async function Login() {
  const session = await getServerSession();
  return (
    <>
      {session ? (
        <LogOut />
      ) : (
        <div>
          <Link href="/login">
            <span>Log In</span>
          </Link>
        </div>
      )}
    </>
  );
}
