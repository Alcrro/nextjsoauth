import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";

export default async function page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }
  return <div>Salut, {session?.user?.name}</div>;
}
