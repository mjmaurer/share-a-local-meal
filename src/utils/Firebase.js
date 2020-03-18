import React, { createContext } from "react";
import app from "firebase/app";

const FirebaseContext = createContext(null);

export default function FirebaseProvider({ children }) {
  if (!app.apps.length) {
    app.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID
    });
  }
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
}

export { FirebaseContext };
