import { Alert, Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuthContext from "../Contexts/useAuthContext";

const Login = () => {
  const { googleSignIn, signInUser, error } = useAuthContext();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const url = location.state?.from || "/shop";

  const hangleGoogle = () => {
    googleSignIn()
      .then((result) => {
        history.push(url);
      })
      .catch((error) => {});
  };
  const handleOnChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[name] = val;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    signInUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Box className="py-3">
      <div className="my-5 w-50 mx-auto py-5 border">
        <div className="text-center px-3">
          {" "}
          <div
            style={{ backgroundColor: "#e0e1dd" }}
            className="mb-5 rounded-circle p-5 d-inline-block"
          >
            <img
              className=" img-fluid "
              width={200}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emart_Logo.svg/1200px-Emart_Logo.svg.png"
              alt=""
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onBlur={handleOnChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onBlur={handleOnChange}
            />
          </div>
          {error && (
            <Alert sx={{ my: 2, width: "75%", mx: "auto" }} severity="error">
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            className="py-1 my-3 cart-button border-0 w-100"
            style={{ backgroundColor: "goldenrod" }}
          >
            Sign In
          </Button>{" "}
        </form>
        <p className="text-center">
          New User ?{" "}
          <Link to="/register" className="text-decoration-none">
            Create account
          </Link>
        </p>
        <div className="text-center my-3">
          <Button onClick={() => hangleGoogle()} variant="text">
            <img src="https://img.icons8.com/color/40/000000/google-logo.png" />
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Login;
