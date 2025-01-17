import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";
const ErrorPage: React.FC = () => {
  return (
    <>
      <div className="error-container">
        <h1>404 Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default ErrorPage;
