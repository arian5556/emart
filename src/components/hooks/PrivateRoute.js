
import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import useAuthContext from '../Contexts/useAuthContext';


const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useAuthContext()
    return (
      <div>
        { isLoading?<CircularProgress/>: <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />}
      </div>
    );
  }
export default PrivateRoute;