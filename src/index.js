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
  ThemeProvider,
} from "context";

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
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
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
