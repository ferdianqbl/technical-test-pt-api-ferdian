const page = () => {
  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      <form
        action=""
        className="w-full sm:w-1/2 md:w-1/3 p-4 border rounded-md"
      >
        <h1 className="text-center">Login</h1>
        <div className="flex flex-col w-full gap-3 items-center justify-center">
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full"
          />
        </div>
        <button className="w-full border rounded-md p-2">
          Login with Google
        </button>
        <button type="submit" className="w-full border rounded-md p-2">
          Login
        </button>
      </form>
    </main>
  );
};

export default page;
