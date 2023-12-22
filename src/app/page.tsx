import authOptions from "@/lib/next-auth/options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="">
      {session?.user ? (
        <div>
          <h1 className="text-3xl">Welcome {session.user.email}</h1>
          <h1 className="text-3xl">Welcome {session.user.name}</h1>
          <p className="text-xl">You are logged in</p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl">Welcome Guest</h1>
          <p className="text-xl">You are not logged in</p>
        </div>
      )}
    </main>
  );
}
