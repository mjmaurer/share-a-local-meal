import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useIntl } from "react-intl";
import ListItemText from "@material-ui/core/ListItemText";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { defineMessages } from "react-intl.macro";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import { IntlLink } from "./IntlRouter";

const messages = defineMessages({
  "app.drawer.requestdelivery": {
    id: "app.drawer.requestdelivery",
    defaultMessage: "Request Delivery"
  },
  "app.drawer.makedelivery": {
    id: "app.drawer.makedelivery",
    defaultMessage: "Make Delivery"
  },
  "app.drawer.mydeliveries": {
    id: "app.drawer.mydeliveries",
    defaultMessage: "My Deliveries"
  }
});

export const DRAWER_WIDTH = 260;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  link: {
    color: "inherit",
    "&:hover": {
      textDecoration: "none"
    }
  },
  drawerIcon: {
    minWidth: 0
  },
  drawerText: {
    marginLeft: theme.spacing(1.5)
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  }
}));

const DrawerItem = ({ icon, text, route }) => {
  const classes = useStyles();
  return (
    <IntlLink className={classes.link} to={route}>
      <ListItem button>
        <ListItemIcon className={classes.drawerIcon}>{icon}</ListItemIcon>
        <ListItemText className={classes.drawerText} primary={text} />
      </ListItem>
    </IntlLink>
  );
};

export default function DrawerMenu({ container, isMobileOpen, mobileToggle }) {
  const classes = useStyles();
  const theme = useTheme();
  const intl = useIntl();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <DrawerItem
          icon={<HomeIcon />}
          route="/request"
          text={intl.formatMessage(messages["app.drawer.requestdelivery"])}
        />
        <DrawerItem
          icon={<MotorcycleIcon />}
          route="/open-deliveries"
          text={intl.formatMessage(messages["app.drawer.makedelivery"])}
        />
        <DrawerItem
          icon={<PersonIcon />}
          route="/"
          text={intl.formatMessage(messages["app.drawer.mydeliveries"])}
        />
      </List>
    </div>
  );
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={isMobileOpen}
          onClose={mobileToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}
