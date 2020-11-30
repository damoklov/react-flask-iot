import './App.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import useStyles from "./Constants";
import { mapStateToProps, mapDispatchToProps } from './components/actions/cartActions'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: useStyles
        };
    }
  total() {
      return this.props.items.reduce((total, item) => {
          console.log(item);
          return total + item._repair_price;
      }, 0);
  }

  render() {
      if (this.props.items.length === 0) {
          return (
            <div className="Cart">
                <h1>Cart is empty</h1>
            </div>
        )
      } else {
          return (
              <div className="Cart">
                  <h1>Cart</h1>
                  <div>
                      <h2>Total: ${this.total().toFixed(2)}</h2>
                  </div>
                  <div className="shop__items">
                      {this.props.items.map((item, index) => {
                          return <div className="shop__item">
                            <h1 key={index}>
                                <Link
                                    to={`/shop/${item.id}`}>{item._appliance_name}</Link>
                            </h1>
                            <img src={item._pic} alt={"Pic"}
                                 width={"200px"} height={"200px"}
                                 className={"center"}/>
                            <div className={this.state.classes.root}>
                                <h2>${item._repair_price}</h2>
                                <IconButton
                                    onClick={() => this.props.removeFromCart(index)}
                                    color="primary"
                                    aria-label="add to shopping cart">
                                    <RemoveShoppingCartIcon/>
                                </IconButton>
                                <IconButton color="primary"
                                            aria-label="info"
                                            key={index}
                                            href={`/shop/${item.id}`}>
                                    <InfoIcon/>
                                </IconButton>
                            </div>
                        </div>
                      })}
                  </div>
              </div>
          )
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);