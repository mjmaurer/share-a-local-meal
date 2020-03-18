import React from "react";
import IntlRouter from "./components/IntlRouter";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <IntlRouter>
      <Home path="/" />
      <Profile path="/profile" />
    </IntlRouter>
  );
}

export default App;
