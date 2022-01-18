import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCounter } from "../features/counter/counterSlice";
import { selectIsLoggedin, logout } from "../features/auth/authSlice";

export function Menu() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedin);
  useEffect(() => {
    if (!isLoggedin) {
      navigate("/");
    }
  }, [isLoggedin]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {counter}
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          ➕
        </button>
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/color">
                Color
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/drugs/category">
                Drugs category
              </Link>
            </li>
            {isLoggedin && (
              <li className="nav-item">
                <Link className="nav-link" to="/photos">
                  Photos
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About us
              </Link>
            </li>
            <li className="nav-item">
              {isLoggedin ? (
                <a className="nav-link" onClick={() => dispatch(logout())}>
                  logout
                </a>
              ) : (
                <Link className="nav-link" to="/auth/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
