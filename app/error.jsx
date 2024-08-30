import React from "react";
import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function CustomErrorPage() {
  // return()
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  console.error(error);

  return (
    <div id='error-page' class='mb-auto'>
      <center>
        <div class='py-40'>
          <h1 class='text-6xl my-5'>Oops!</h1>
          <p class='my-5'>
            <i>{error.statusText || error.message}</i>
          </p>
          <p class='my-5'>Sorry, an unexpected error has occurred.</p>
          <button
            class='bg-red-600 hover:bg-red-800 text-white rounded-3xl p-4 text-2xl'
            onClick={() => handleGoBack()}
          >
            Go Back
          </button>
        </div>
      </center>
    </div>
  );
}

// export default CustomErrorPage;
