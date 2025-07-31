import React from "react";
import ReactDOM from "react-dom/client"; // use from 'react-dom/client'
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-lulzamnk6zndighc.us.auth0.com";
const clientId = "rB1nSoktOFeQTdt9IDmjpvRRcoiPv6A7";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
