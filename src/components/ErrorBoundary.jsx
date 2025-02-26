import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorBoundary;
