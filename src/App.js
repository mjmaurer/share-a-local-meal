import React from "react";
import IntlRouter from "./components/IntlRouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequestDelivery from "./pages/RequestDelivery";
import "./style/globals.css";

function App() {
  return (
    <IntlRouter>
      <Layout path="/">
        <Home path="/" />
        <Login path="/login" />
        <RequestDelivery path="/request" />
      </Layout>
    </IntlRouter>
  );
}

export default App;
