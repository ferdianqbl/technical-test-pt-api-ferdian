"use client";
import Link from "next/link";
import Profile from "./profile";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { status } = useSession();
  const pathname = usePathname();
  return (
    <nav className="bg-primary">
      <div className="container flex justify-between items-center py-2">
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-blue-400 border-b-[1px] border-blue-400"
                : "text-white"
            }
          >
            Home
          </Link>
          <Link
            href="/list"
            className={
              pathname === "/list"
                ? "text-blue-400 border-b-[1px] border-blue-400"
                : "text-white"
            }
          >
            List
          </Link>
        </div>
        {status === "unauthenticated" && (
          <Link href="/login" className="text-white">
            Login
          </Link>
        )}
        {status === "authenticated" && <Profile />}
      </div>
    </nav>
  );
};

export default Navbar;
