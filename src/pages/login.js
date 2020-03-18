import React, { useContext } from "react";

import { Helmet } from "react-helmet";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { FirebaseContext } from "utils/Firebase";
import Layout from "../components/Layout";

export default function Login() {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = React.useState();
  const authConfig = {
    callbacks: {
      // Called when the user has been successfully signed in.
      signInSuccessWithAuthResult(authResult, redirectUrl) {
        if (authResult.user) {
          setUser(authResult.user);
        }
        if (authResult.additionalUserInfo) {
          document.getElementById("is-new-user").textContent = authResult
            .additionalUserInfo.isNewUser
            ? "New User"
            : "Existing User";
        }
        // Do not redirect.
        return false;
      }
    },
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        {/* <meta name="description" content={siteMetadata.contactDescription} />
        <meta
          property="og:description"
          content={siteMetadata.contactDescription}
        /> */}
        <title>Login</title>
        <meta property="og:title" content="Login" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="article" />
        {/* <meta
            property="og:image"
            content={`https://www.nickbmason.com${image.localFile.image.fixed.src}`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" /> */}
      </Helmet>
      {user}
      <StyledFirebaseAuth
        uiConfig={authConfig}
        firebaseAuth={firebase.auth()}
      />
    </Layout>
  );
}
