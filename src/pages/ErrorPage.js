import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>Oops! That page doesnt exist!</h1>
        <Link to="/">Back Home</Link>
      </div>
    </section>
  );
};

export default ErrorPage;
