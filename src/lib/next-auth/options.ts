import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const response = await fetch(
        "https://api.goprestasi.com/api/login/google"
      );
      const data = await response.json();

      if (!response.ok || data.error || !data.url) {
        return Promise.resolve(false);
      }

      window.location = data.url; // Redirect to Google login URL
      return Promise.resolve(false); // Return false to prevent default behavior
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};

export default authOptions;
