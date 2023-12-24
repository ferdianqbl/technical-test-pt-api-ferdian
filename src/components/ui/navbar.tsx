import Link from "next/link";
import AuthButton from "./auth-button";

const Navbar = async () => {
  return (
    <nav className="bg-primary">
      <div className="container flex justify-between items-center py-2">
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/profile" className="text-white">
            Profile
          </Link>
        </div>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
