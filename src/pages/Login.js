import React, { useContext, useState } from "react";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Container from "@material-ui/core/Container";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import { FirebaseContext } from "../utils/Firebase";
import { useNavigateIntl } from "../components/IntlRouter";
import JustTextContent from "../components/JustTextContext";

const useStyles = makeStyles(theme => ({
  authBox: {
    marginTop: theme.spacing(3)
  }
}));

export default function LoginPage() {
  const classes = useStyles();
  const app = useContext(FirebaseContext);
  const [user] = useAuthState(app.auth());
  const [error, setError] = useState(null);
  const navigateIntl = useNavigateIntl();

  if (user) {
    app
      .firestore()
      .collection("volunteers")
      .doc(user.uid)
      .set(
        {
          uid: user.uid,
          incompleteAssignments: firebase.firestore.FieldValue.increment(0),
          totalAssignments: firebase.firestore.FieldValue.increment(0),
          email: user.email
        },
        { merge: true }
      )
      .then(() => {
        navigateIntl(`/${user.uid}/assigned-requests`);
      })
      .catch(e => setError(e));
  }

  const authConfig = {
    callbacks: {
      // Called when the user has been successfully signed in.
      signInSuccessWithAuthResult(authResult, redirectUrl) {
        return false;
      }
    },
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
      {error && <JustTextContent body="Could not authenticate" />}
      {!user && (
        <Container className={classes.authBox}>
          <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={app.auth()} />
        </Container>
      )}
    </>
  );
}
