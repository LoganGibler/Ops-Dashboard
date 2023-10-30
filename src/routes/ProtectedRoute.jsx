import React, { useState, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";

import { testingProtectedRoute } from "../middleware/auth";

function ProtectedRoute({ element: Component, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    async function checkAuthentication() {
      const authenticated = await testingProtectedRoute();
      setIsAuthenticated(authenticated);
    }

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    // Loading state, you can render a loading spinner or message here
    return <div>Loading...</div>;
  } else {
    return isAuthenticated ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/access-denied" replace />
    );
  }
}

export default ProtectedRoute;
