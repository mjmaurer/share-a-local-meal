import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl.macro";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { IntlLink } from "./IntlRouter";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    color: "white"
  },
  title: {
    flexGrow: 1
  }
}));

export default function MenuAppBar({ children }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Helmet
          titleTemplate="Invisible Hands Deliver | %s"
          defaultTitle="Invisible Hands Deliver"
        >
          <html lang="en" />
          <meta charSet="utf-8" />
          {/* <script async defer src="https://buttons.github.io/buttons.js" /> */}
          {/* <link rel="canonical" href="" /> */}
        </Helmet>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <IntlLink className={classes.link} to="/">
              <FormattedMessage
                id="app.title"
                defaultMessage="Invisible Hands"
              />
            </IntlLink>
          </Typography>
          <IntlLink className={classes.link} to="/profile">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </IntlLink>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
