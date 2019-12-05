import React from "react";
import  {Switch, Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Default from "./components/Default";
import Detail from "./components/Detail";
import Cart from "./components/Cart";

function App() {
    return (
        <React.Fragment>
           <Navbar/>
           <Switch>
               <Route exact path="/" component={ProductList}/>
               <Route path="/details" component={Detail}/>
               <Route path="/cart" component={Cart}/>
               <Route component={Default}/>
           </Switch>
        </React.Fragment>
    );
}

export default App;
