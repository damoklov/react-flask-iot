import './App.css';
import Cart from './Cart';
import Shop from './Shop';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import ItemDetail from './ItemDetails';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
                </Switch>
            </Router>
            <Footer/>
        </div>
        )
    }
}

export default App;