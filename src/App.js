import React from "react";
import IntlRouter from "./components/IntlRouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequestDelivery from "./pages/RequestDelivery";
import SuccessfulRequest from "./pages/SuccessfulRequest";
import OpenRequests from "./pages/OpenRequests";
import MyAssignments from "./pages/MyAssignments";
import "./style/globals.css";

function App() {
  return (
    <IntlRouter>
      <Layout path="/">
        {/* Only components from /pages should be nested here */}
        <Home path="/" />
        <Login path="/login" />
        <RequestDelivery path="/request" />
        <SuccessfulRequest path="/request-success" />
        <OpenRequests path="/open-requests" />
        <MyAssignments path="/:volunteerId/assigned-requests" />
      </Layout>
    </IntlRouter>
  );
}

export default App;
