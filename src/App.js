import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import Footer from './components/Home/Footer';
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import ItemDetail from './components/Shop/ItemDetails';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from "./components/CheckoutPage/Checkout";

class App extends Component {
    render() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/cart"} exact component={Cart}/>
                <Route path={"/shop"} exact component={Shop}/>
                <Route path={"/shop/:id"} component={ItemDetail} />
                <Route path={"/checkout"} exact component={Checkout} />
                </Switch>
            </Router>
            <Footer/>
        </div>
        )
    }
}

export default App;