import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/Contexts/AuthProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import PrivateRoute from "./components/hooks/PrivateRoute";
import Login from "./components/Login/Login";
import ManageOrder from "./components/ManageOrder/ManageOrder";
import NotFound from "./components/NotFOund/NotFound";
import Order from "./components/Order/Order";
import Register from "./components/Register/Register";
import Shop from "./components/shop/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePart/Home/Home";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>
            <PrivateRoute path="/shipping">       
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
