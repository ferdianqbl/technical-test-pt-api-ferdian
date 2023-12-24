"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

const FormLogin = () => {
  return (
    <form action="" className="w-full sm:w-1/2 md:w-1/3 p-4 border rounded-md">
      <h1 className="text-center mb-2 text-2xl font-bold">Login</h1>
      <h1 className="text-center mb-8 text-sm text-gray-400">
        Login with your email and password or login with Google
      </h1>
      <div className="flex flex-col w-full gap-3 items-center justify-center mb-4">
        <Input
          type="email"
          name="email"
          placeholder="email"
          className="w-full"
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          className="w-full"
          type="button"
          variant={"outline"}
          onClick={() => signIn("google", { callbackUrl: "/", redirect: true })}
        >
          Login with Google
        </Button>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;

//   // Handle the response from Google login API
//   console.log(response);
//   // Send the code to your backend API
//   sendCodeToBackend(response.code);
// };

// const sendCodeToBackend = (code: any) => {
//   // Send the code to your backend API
//   fetch("https://api.goprestasi.com/api/login/google", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Handle the response from your backend API
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
