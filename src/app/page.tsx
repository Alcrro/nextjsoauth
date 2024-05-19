import LogOut from "@/components/auth/LogOut";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const arrayRoutes = ["server", "admin", "guest"];
  const session = await getServerSession();

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24">
      <ul className="text-center">
        {arrayRoutes.map((items, key) => {
          return items === "login" && session ? (
            <LogOut key={key} />
          ) : items === "register" && session ? null : (
            <li className="p-2" key={key}>
              <Link href={`/${items}`}>{items}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
