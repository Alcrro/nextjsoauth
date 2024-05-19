import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";
export default async function page({ params }: { params: { slug: string } }) {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <span>Bun venit pe profilul lui: </span>
      {params.slug}
    </div>
  );
}
