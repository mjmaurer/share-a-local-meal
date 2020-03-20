import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import JustTextContent from "../components/JustTextContext";
import { FirebaseContext } from "../utils/Firebase";

const useStyles = makeStyles(theme => ({
  text: {
    marginBottom: theme.spacing(3)
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const app = useContext(FirebaseContext);

  app
    .firestore()
    .collection("requests")
    .doc("2341")
    .set({
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"]
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  app
    .firestore()
    .collectionGroup("requests")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
      });
    });
  return (
    <>
      <Helmet>
        {/* <meta name="description" content={siteMetadata.contactDescription} />
          <meta
            property="og:description"
            content={siteMetadata.contactDescription}
          /> */}
        <meta property="og:title" content="Invisible Hands Deliver" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="website" />
        {/* <meta
            property="og:image"
            content={`https://www.nickbmason.com${image.localFile.image.fixed.src}`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" /> */}
      </Helmet>

      <JustTextContent>
        <Typography className={classes.text} variant="body1">
          You don't need an account to request a delivery!
        </Typography>
      </JustTextContent>
    </>
  );
}
