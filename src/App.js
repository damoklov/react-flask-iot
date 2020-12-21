import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import Footer from './components/Home/Footer';
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import ItemDetail from './components/Shop/ItemDetails';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from "./components/CheckoutPage/Checkout";
import LoginWrapper from "./components/Users/Login";
import RegistrationWrapper from "./components/Users/RegistrationForm";
import ProtectedRoute from "./components/Protected/ProtectedRoute";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                <Route path={"/"} exact component={Home} isAuthenticated={isAuthenticated}/>
                <Route path={"/login"} exact component={LoginWrapper} isAuthenticated={isAuthenticated}/>
                <Route path={"/register"} exact component={RegistrationWrapper} isAuthenticated={isAuthenticated}/>
                <ProtectedRoute path={"/cart"} exact component={Cart} isAuthenticated={isAuthenticated}/>
                <ProtectedRoute path={"/shop"} exact component={Shop} isAuthenticated={isAuthenticated}/>
                <ProtectedRoute path={"/shop/:id"} component={ItemDetail} isAuthenticated={isAuthenticated}/>
                <ProtectedRoute path={"/checkout"} exact component={Checkout} isAuthenticated={isAuthenticated}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;