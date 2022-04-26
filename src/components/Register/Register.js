import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuthContext from "../Contexts/useAuthContext";

const Register = () => {
  const { signUpUser, user, isLoading, error } = useAuthContext();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const handleOnChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[name] = val;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password didn't match");
      return;
    }
    signUpUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Box className="py-5">
      <div className="my-5 w-50 mx-auto py-5 shadow-lg">
        <Typography
          variant="h2"
          className="text-center mb-5 "
          sx={{ fontFamily: "Bangers, cursive" }}
        >
          R<span className="text-warning">E</span>GIST
          <span className="text-warning">E</span>R
        </Typography>
        <form onSubmit={handleSubmit} className="px-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              onBlur={handleOnChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
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
              name="password"
              onBlur={handleOnChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Re-type Password
            </label>
            <input
              name="password2"
              onBlur={handleOnChange}
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <Button
            type="submit"
            className="py-2 w-100 my-3 cart-button border-0 "
            style={{ backgroundColor: "goldenrod" }}
          >
            Sign Up
          </Button>{" "}
        </form>
        {isLoading && <CircularProgress className="mx-auto"></CircularProgress>}
        {user.email && (
          <Alert className="mb-3 w-50 mx-auto" severity="success">
            User Created Successfully
          </Alert>
        )}
        {error && (
          <Alert className="w-50 mx-auto mb-5" severity="error">
            {error}
          </Alert>
        )}
        <p className="text-center">
          Already have an account ?{" "}
          <Link to="/login" className="text-decoration-none">
            Log in
          </Link>
        </p>
      </div>
    </Box>
  );
};

export default Register;
