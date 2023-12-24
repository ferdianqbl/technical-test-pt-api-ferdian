"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import Link from "next/link";

const AuthButton = () => {
  const { status } = useSession();
  if (status === "unauthenticated")
    return (
      <Link href="/login" className="text-white">
        Login
      </Link>
    );
  else if (status === "authenticated")
    return (
      <Button onClick={() => signOut()} variant={"outline"} className="w-full">
        Logout
      </Button>
    );

  return null;
};

export default AuthButton;
