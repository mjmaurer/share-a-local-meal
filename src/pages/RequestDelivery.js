import React from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { defineMessages } from "react-intl.macro";

const FORM_MARGIN_SCALE = 4;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  fieldHalfWidth: {
    marginLeft: theme.spacing(FORM_MARGIN_SCALE),
    marginRight: theme.spacing(FORM_MARGIN_SCALE),
    width: `calc(50% - (2 * ${theme.spacing(FORM_MARGIN_SCALE)}px))`
  },
  fieldFullWidth: {
    marginLeft: theme.spacing(FORM_MARGIN_SCALE),
    marginRight: theme.spacing(FORM_MARGIN_SCALE),
    width: `calc(100% - (2 * ${theme.spacing(FORM_MARGIN_SCALE)}px))`
  }
}));

const messages = defineMessages({
  "app.request.form.firstname": {
    id: "app.request.form.firstname",
    defaultMessage: "First Name"
  },
  "app.request.form.lastname": {
    id: "app.request.form.lastname",
    defaultMessage: "Last Name"
  },
  "app.request.form.phone": {
    id: "app.request.form.phone",
    defaultMessage: "Phone Number"
  },
  "app.request.form.email": {
    id: "app.request.form.email",
    defaultMessage: "Email"
  },
  "app.request.form.address": {
    id: "app.request.form.address",
    defaultMessage: "Address"
  },
  "app.request.form.address.help": {
    id: "app.request.form.address.help",
    defaultMessage: "Include apartment # if applicable"
  },
  "app.request.form.postal": {
    id: "app.request.form.postal",
    defaultMessage: "Zip Code"
  },
  "app.request.form.neighborhood": {
    id: "app.request.form.neighborhood",
    defaultMessage: "Neighborhood"
  },
  "app.request.form.neighborhood.placeholder": {
    id: "app.request.form.neighborhood.placeholder",
    defaultMessage: "Astoria, Washington Heights, etc."
  },
  "app.request.form.items": {
    id: "app.request.form.items",
    defaultMessage: "What items would you like?"
  },
  "app.request.form.items.help": {
    id: "app.request.form.items.help",
    defaultMessage:
      "Please be as specific as possible, including quantities, etc."
  },
  "app.request.form.store": {
    id: "app.request.form.store",
    defaultMessage: "What store(s) would you like the volunteer to shop at?"
  },
  "app.request.form.store.help": {
    id: "app.request.form.store.help",
    defaultMessage: "'Don't Care' is perfectly fine!"
  },
  "app.request.form.payment": {
    id: "app.request.form.payment",
    defaultMessage: "How would you like to pay for your order?"
  },
  "app.request.form.payment.help": {
    id: "app.request.form.payment.help",
    defaultMessage:
      "Note: We're free volunteers, this is how you'd like to pay for the order itself :)"
  },
  "app.request.form.payment.ahead": {
    id: "app.request.form.payment.ahead",
    defaultMessage: "Order ahead to the store (best option if possible!)"
  },
  "app.request.form.payment.before": {
    id: "app.request.form.payment.before",
    defaultMessage: "Give money to the volunteer before they get the order"
  },
  "app.request.form.payment.after": {
    id: "app.request.form.payment.after",
    defaultMessage:
      "Have the volunteer pay for the order and reimburse when they deliver"
  },
  "app.request.form.notes": {
    id: "app.request.form.notes",
    defaultMessage: "Notes?"
  },
  "app.request.form.subsidy": {
    id: "app.request.form.subsidy",
    defaultMessage: "Do you need a subsidy for your groceries?"
  },
  "app.request.form.subsidy.help": {
    id: "app.request.form.subsidy.help",
    defaultMessage:
      "We have very limited cash flow, but may be able to help offset some of the cost of groceries. Please denote your requested amount and we will do our best to help."
  },
  "app.request.form.subsidy.placeholder": {
    id: "app.request.form.subsidy.placeholder",
    defaultMessage: "E.g. $25 for eggs, milk, and bread"
  }
});

export default function RequestDelivery() {
  const classes = useStyles();
  const intl = useIntl();
  const { register, handleSubmit, watch, errors } = useForm();

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

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label={intl.formatMessage(messages["app.request.form.firstname"])}
          id="firstname"
          autoComplete="given-name"
          type="text"
          variant="outlined"
          required
          margin="normal"
          className={classes.fieldHalfWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.lastname"])}
          id="lastname"
          autoComplete="family-name"
          type="text"
          variant="outlined"
          required
          margin="normal"
          className={classes.fieldHalfWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.phone"])}
          id="phone"
          autoComplete="tel"
          type="tel"
          required
          variant="outlined"
          margin="normal"
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.email"])}
          id="email"
          autoComplete="email"
          type="email"
          margin="normal"
          variant="outlined"
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.address"])}
          helperText={intl.formatMessage(
            messages["app.request.form.address.help"]
          )}
          id="address"
          margin="normal"
          autoComplete="street-address"
          type="text"
          variant="outlined"
          required
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.postal"])}
          id="postal"
          margin="normal"
          autoComplete="postal-code"
          type="text"
          variant="outlined"
          required
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.neighborhood"])}
          id="neighborhood"
          placeholder={intl.formatMessage(
            messages["app.request.form.neighborhood.placeholder"]
          )}
          margin="normal"
          variant="outlined"
          required
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.items"])}
          helperText={intl.formatMessage(
            messages["app.request.form.items.help"]
          )}
          id="grocery-list"
          rowsMax="10"
          rows="5"
          multiline
          variant="outlined"
          margin="normal"
          required
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.store"])}
          helperText={intl.formatMessage(
            messages["app.request.form.store.help"]
          )}
          id="store"
          margin="normal"
          variant="outlined"
          required
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.payment"])}
          helperText={intl.formatMessage(
            messages["app.request.form.payment.help"]
          )}
          select
          SelectProps={{
            native: true
          }}
          margin="normal"
          variant="outlined"
          required
          className={classes.fieldFullWidth}
        >
          <option value="pay-ahead">
            {intl.formatMessage(messages["app.request.form.payment.ahead"])}
          </option>
          <option value="pay-volunteer-before">
            {intl.formatMessage(messages["app.request.form.payment.before"])}
          </option>
          <option value="pay-volunteer-after">
            {intl.formatMessage(messages["app.request.form.payment.after"])}
          </option>
        </TextField>
        <TextField
          label={intl.formatMessage(messages["app.request.form.notes"])}
          id="notes"
          margin="normal"
          rowsMax="5"
          variant="outlined"
          multiline
          className={classes.fieldFullWidth}
        />
        <TextField
          label={intl.formatMessage(messages["app.request.form.subsidy"])}
          helperText={intl.formatMessage(
            messages["app.request.form.subsidy.help"]
          )}
          id="subsidy"
          placeholder={intl.formatMessage(
            messages["app.request.form.subsidy.placeholder"]
          )}
          variant="outlined"
          margin="normal"
          className={classes.fieldFullWidth}
        />
      </form>
    </>
  );
}
