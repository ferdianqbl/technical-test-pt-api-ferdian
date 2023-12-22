"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";

type Props = {
  children: React.ReactNode;
};

const GoogleAuthProvider: React.FC<Props> = ({ children }) => {
  return (
    <GoogleOAuthProvider
      clientId={
        "623068502848-vb5b9lma1h77f2icb1uq7rt2phrmceoa.apps.googleusercontent.com"
      }
    >
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
