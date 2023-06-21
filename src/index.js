import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  DataContextProvider,
  LikesContextProvider,
} from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataContextProvider>
          <LikesContextProvider>
            <App />
          </LikesContextProvider>
        </DataContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
