import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (account?.provider === "google") {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }: any) {
      session = {
        ...session,
        ...token,
      };
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default authOptions;
