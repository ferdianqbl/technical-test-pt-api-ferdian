"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const router = useRouter();

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.log(error),
    flow: "auth-code",
  });

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
          onClick={handleLogin}
        >
          Login with Google
        </Button>
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}
        {/* <GoogleSignInButton /> */}
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
