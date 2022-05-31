import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { authLogout } from "../../store/authStore";
import "./dashboard.scss";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const _signOut = () => {
    dispatch(authLogout());
  };
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          Company name
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a
              className="nav-link px-3"
              href="#"
              onClick={() => {
                _signOut();
              }}
            >
              Sign out
            </a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span
                    data-feather="home"
                    className="align-text-bottom"
                  ></span>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/quiz">
                  <span
                    data-feather="file"
                    className="align-text-bottom"
                  ></span>
                  Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/users">
                  <span
                    data-feather="shopping-cart"
                    className="align-text-bottom"
                  ></span>
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
