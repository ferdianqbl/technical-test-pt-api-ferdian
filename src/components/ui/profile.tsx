"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import Image from "next/image";
import AuthButton from "./auth-button";

const Profile = () => {
  const { data, status } = useSession();
  if (status === "unauthenticated") return null;
  else
    return (
      <Sheet>
        <SheetTrigger>
          <Image
            src={data?.user?.image || ""}
            alt="icon"
            width={24}
            height={24}
            className="rounded-full"
          />
        </SheetTrigger>
        <SheetContent className="bg-primary border-none w-full sm:w-[540px]">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Image
              src={data?.user?.image || ""}
              alt="icon"
              width={20}
              height={20}
              className="w-full h-full rounded-full object-cover object-center"
            />
            <div className="flex flex-col gap-1">
              <p className="text-white">{data?.user?.name}</p>
              <p className="text-gray-500">{data?.user?.email}</p>
            </div>
          </div>
          <AuthButton />
        </SheetContent>
      </Sheet>
    );
};

export default Profile;
