import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { MainLayout } from "../layout";
import {
  AdminDashboard,
  Cart,
  Home,
  Products,
  Shipping,
  Product,
  NotFound,
  Payment,
} from "../pages";

function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin-dashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/cart">
          <MainLayout>
            <Cart />
          </MainLayout>
        </Route>
        <Route exact path="/shipping">
          <MainLayout>
            <Shipping />
          </MainLayout>
        </Route>
        <Route exact path="/payment">
            <Payment/>
        </Route>
        <Route path="/goods/:productId">
          <MainLayout>
            <Product />
          </MainLayout>
        </Route>
        <Route path="/main/:category">
          <MainLayout>
            <Products />
          </MainLayout>
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}

export default AppRoute;