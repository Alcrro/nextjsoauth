import AuthForm from "../../../components/auth/AuthForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession();

  if (session) return redirect("/");
  return (
    <div className="form-container flex justify-center h-[100vh] items-center">
      <AuthForm />
    </div>
  );
}
