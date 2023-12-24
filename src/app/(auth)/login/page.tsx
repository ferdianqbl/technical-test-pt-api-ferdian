import FormLogin from "@/components/pages/auth/form-login";
import authOptions from "@/lib/next-auth/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/");
  else
    return (
      <main className="flex items-center justify-center min-h-screen w-full">
        <FormLogin />
      </main>
    );
};

export default Page;
