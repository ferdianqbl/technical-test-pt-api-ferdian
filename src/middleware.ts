export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/detail/:path*", "/profile/:path*", "/list/:path*"],
};
