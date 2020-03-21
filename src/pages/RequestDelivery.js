import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import RequestForm from "../components/RequestForm";

const Y_MARGIN_SCALE = 1.5;

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(Y_MARGIN_SCALE),
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap"
    }
  },
  textRoot: {
    minWidth: "45%"
  },
  text: {
    marginTop: theme.spacing(Y_MARGIN_SCALE),
    marginBottom: theme.spacing(Y_MARGIN_SCALE)
  },
  form: {
    marginTop: theme.spacing(Y_MARGIN_SCALE),
    marginBottom: theme.spacing(Y_MARGIN_SCALE)
  }
}));

export default function RequestDelivery() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.textRoot}>
        <Typography className={classes.text} variant="h4">
          Request a Delivery
        </Typography>
        <Typography className={classes.text} variant="body1">
          After requesting, your zip code and first name will be listed to
          potential volunteers.
        </Typography>
      </Container>
      <RequestForm className={classes.form} />
    </Box>
  );
}
