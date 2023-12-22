import React, { useEffect } from "react";

const GoogleSignInButton = () => {
  useEffect(() => {
    // Load the Google Sign-In API on component mount
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "623068502848-vb5b9lma1h77f2icb1uq7rt2phrmceoa.apps.googleusercontent.com",
        redirect_uri: "http://localhost:3000/api/auth/google/callback",
      });
    });
  }, []);

  const handleSignInClick = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log("User signed in:", profile);
      // You can handle the signed-in user here
    });
  };

  return <button onClick={handleSignInClick}>Sign in with Google</button>;
};

export default GoogleSignInButton;
