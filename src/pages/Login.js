import React, { useContext } from "react";

import { Helmet } from "react-helmet";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import { FirebaseContext } from "../utils/Firebase";
import { useNavigateIntl } from "../components/IntlRouter";

const useStyles = makeStyles(theme => ({
  authBox: {
    marginTop: theme.spacing(3)
  }
}));

export default function LoginPage() {
  const classes = useStyles();
  const app = useContext(FirebaseContext);
  const [user, setUser] = React.useState();
  const navigateIntl = useNavigateIntl();
  const authConfig = {
    callbacks: {
      // Called when the user has been successfully signed in.
      signInSuccessWithAuthResult(authResult, redirectUrl) {
        if (authResult.user) {
          setUser(authResult.user);
        }
        navigateIntl(`/deliveries/${authResult.user.uid}`);
        return false;
      }
    },
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false
      }
    ]
  };

  return (
    <>
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
      {user ? null : (
        <Container className={classes.authBox}>
          <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={app.auth()} />
        </Container>
      )}
    </>
  );
}
