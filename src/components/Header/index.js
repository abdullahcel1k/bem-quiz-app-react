import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authLogout } from "../../store/authStore";

const Header = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const _signOut = () => {
    dispatch(authLogout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {!auth.token ? (
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="sign-in-up">
                  Login
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="admin">
                Dashboard
              </Link>
            </li>
          </ul>
          {auth.token && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                _signOut();
              }}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
