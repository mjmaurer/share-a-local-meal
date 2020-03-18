import React from "react";
import { Router, Redirect } from "@reach/router";
import { IntlProvider, FormattedMessage } from "react-intl";

const SUPPORTED_LANG = ["en"];
const IntlContext = React.createContext();

const polyfillIntl = language => {
  const locale = language.split("-")[0];
  try {
    if (!Intl.PluralRules) {
      require("@formatjs/intl-pluralrules/polyfill");
      require(`@formatjs/intl-pluralrules/dist/locale-data/${locale}`);
    }

    if (!Intl.RelativeTimeFormat) {
      require("@formatjs/intl-relativetimeformat/polyfill");
      require(`@formatjs/intl-relativetimeformat/dist/locale-data/${locale}`);
    }
  } catch (e) {
    throw new Error(`Cannot find react-intl/locale-data/${language}`);
  }
};

const LangRoute = ({ lang, children }) => {
  const supportedLang = SUPPORTED_LANG.includes(lang) ? lang : "en";
  polyfillIntl(supportedLang);
  return (
    <IntlProvider locale={supportedLang} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default function IntlRouter({ children }) {
  return (
    <Router>
      <Redirect from="/" to="/en" />
      <LangRoute path=":lang">{children}</LangRoute>
    </Router>
  );
}
export const IntlContextProvider = IntlContext.Provider;
export const IntlContextConsumer = IntlContext.Consumer;
