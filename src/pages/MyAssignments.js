import React, { useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { useIntl } from "react-intl";
import JustTextContent from "../components/JustTextContext";
import AssignmentCard from "../components/AssignmentCard";
import CardList from "../components/CardList";
import { FirebaseContext, useLoggedInVolunteerQuery } from "../utils/Firebase";
import messages from "../i18n/Messages";

const useStyles = makeStyles(theme => ({
  input: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
}));

export default function MyAssignments() {
  const classes = useStyles();
  const intl = useIntl();

  const app = useContext(FirebaseContext);
  const [assignments, loading, error] = useLoggedInVolunteerQuery(
    uid =>
      app
        .firestore()
        .collection("requests")
        .where("assigned", "==", uid),
    app
  );

  if (error) {
    return <JustTextContent header="Error loading deliveries :/" />;
  }
  if (loading) {
    return <CircularProgress className={classes.input} />;
  }
  if (!assignments) {
    return (
      <JustTextContent
        header="Please login to see requests!"
        followupText="Log In"
        followupRoute="/open-requests"
      />
    );
  }
  if (assignments.empty) {
    return (
      <JustTextContent
        followupText={intl.formatMessage(messages["app.drawer.makedelivery"])}
        followupRoute="/open-requests"
        body="No assigned deliveries. Click below to get started!"
      />
    );
  }

  return (
    <>
      {loading && <CircularProgress className={classes.input} />}
      {error && <JustTextContent className={classes.input} header="Error" />}

      {assignments && (
        <>
          <JustTextContent
            header="Your Deliveries"
            body="Thanks for helping! After delivery, please upload a picture to show it's completed &#127969;"
          />
          <CardList>
            {assignments.docs.map(doc => (
              <AssignmentCard
                app={app}
                key={doc.id}
                requestId={doc.id}
                doc={doc.data()}
              />
            ))}
          </CardList>
        </>
      )}
    </>
  );
}
