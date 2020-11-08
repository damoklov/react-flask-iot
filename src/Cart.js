import './App.css';
import React, {Component} from 'react'

class Cart extends Component {
  state = {
    loading: true,
    appliances: null,
  };

  render() {
    return (
        <div className="Cart">
            <h1>Cart</h1>
        </div>
    )
  }
}

export default Cart;