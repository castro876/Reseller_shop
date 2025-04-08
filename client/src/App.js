import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Shopping_Cart from './components/cart_component/Shopping_Cart';
import Product from './components/products_components/Product';
import Home from './page/Home';
import Single_Page from './page/Single_Page';
import Truck from './page/Truck';


function App() {

  const initialOptions = {
    "client-id": "ASY_O36EBi_HV4efhXn-Gej6hrKsF4VhL_418m5gEuIiF-snIu3Jol0qgYR74VwZTOnZgSTF8Gv6W4Up",
    currency: "USD",
    intent: "capture",
  };


  return (
     <Router>
      <>
      <Switch>
      <Route exact path = "/" >
       <Home/>
        </Route>
        <Route path = "/singleproduct/:id">
         <Single_Page/>
        </Route>
        <Route path = "/shoppingcart" >
        <PayPalScriptProvider options={initialOptions} >
           <Shopping_Cart/>
          </PayPalScriptProvider>
        </Route>
        <Route path = "/product" >
          <Product/>
        </Route>
        <Route path = "/complete" >
         <Truck/>
        </Route>
        <Route path = "*" >
         <h1>Opps! Page Not Found: 404</h1>
        </Route>
      </Switch>
      </>
     </Router>
  );
}

export default App;
