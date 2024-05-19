import { getServerSession } from "next-auth";
import Link from "next/link";

import React from "react";

export default async function Profile() {
  const session = await getServerSession();
  const slug = session?.user?.name?.split(" ").join("-").toLocaleLowerCase();

  return (
    <>
      {session ? (
        <div>
          <Link href={`/profile/${slug}`}>
            <span>{session?.user?.name}</span>
          </Link>
        </div>
      ) : (
        <div>
          <Link href={"/profile"}>
            <span>Profile</span>
          </Link>
        </div>
      )}
    </>
  );
}
