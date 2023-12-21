"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormLogin = () => {
  const signInInWithGoogle = () => {
    window.open("http://localhost:3000/api/auth/google/callback", "_self");
  };

  return (
    <form action="" className="w-full sm:w-1/2 md:w-1/3 p-4 border rounded-md">
      <h1 className="text-center">Login</h1>
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
          onClick={signInInWithGoogle}
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
