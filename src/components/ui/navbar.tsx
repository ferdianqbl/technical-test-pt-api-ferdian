import Link from "next/link";
import Profile from "./profile";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/next-auth/options";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="bg-primary">
      <div className="container flex justify-between items-center py-2">
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/list" className="text-white">
            List Anime
          </Link>
        </div>
        {!session && (
          <Link href="/login" className="text-white">
            Login
          </Link>
        )}
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
