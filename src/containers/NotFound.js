import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  const navigateHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        Page Not Found!
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => {
            navigateHomePage();
          }}
        >
          Anasayfaya Dön
        </button>
      </div>
    </>
  );
};

export default NotFound;
