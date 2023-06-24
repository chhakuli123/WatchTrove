import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  DataContextProvider,
  LikesContextProvider,
  WatchLaterContextProvider,
  PlayListContextProvider,
  HistoryContextProvider,
} from "context";

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataContextProvider>
          <LikesContextProvider>
            <WatchLaterContextProvider>
              <PlayListContextProvider>
                <HistoryContextProvider>
                  <App />
                </HistoryContextProvider>
              </PlayListContextProvider>
            </WatchLaterContextProvider>
          </LikesContextProvider>
        </DataContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
