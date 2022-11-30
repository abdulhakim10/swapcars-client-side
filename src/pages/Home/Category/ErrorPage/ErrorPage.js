import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="m-12">
      <div className="w-4/5 mx-auto text-center">
        <img
          className="w-full rounded-lg mb-4"
          src="https://blog.stackfindover.com/wp-content/uploads/2022/05/Animated-404-Page-Not-Found.jpg"
          alt=""
        />
        
        <Link className="btn btn-outline font-semibold text-green-900 px-8 py-4 rounded-lg" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;