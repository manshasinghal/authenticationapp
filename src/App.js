import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <div>Loading...</div>;

  return <div>hii</div>;


};

export default App;
