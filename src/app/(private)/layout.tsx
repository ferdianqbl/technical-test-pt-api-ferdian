import Navbar from "@/components/ui/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="my-8 container">{children}</div>
    </>
  );
};

export default Layout;
