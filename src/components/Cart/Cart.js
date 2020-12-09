import '../../App.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import useStyles from "../../Constants";
import { mapStateToProps, mapDispatchToProps } from '../actions/cartActions';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: useStyles
        };
    }

    total() {
        return this.props.items.reduce((total, item) => {
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
                  <div className="shop__checkout">
                      <Link to={"/checkout"}>
                          <Button
                            onClick={() => this.props.checkout(this.props.items)}
                            variant="contained"
                            color="default"
                            size="large"
                            startIcon={<AccountBalanceWalletIcon />}
                          >Buy!
                          </Button>
                      </Link>
                  </div>
                  <div className="shop__items">
                      {this.props.items.map((item, index) => {
                          return <div className="shop__item">
                            <h1 key={index}>
                                {item._appliance_name}
                            </h1>
                            <img src={item._pic} alt={"Pic"}
                                 width={"200px"} height={"200px"}
                                 className={"center"}/>
                            <div className={this.state.classes.root}>
                                <h2>${item._repair_price}</h2>
                                <IconButton
                                    onClick={() => this.props.removeFromCart(index)}
                                    color="primary"
                                    aria-label="remove from shopping cart">
                                    <RemoveShoppingCartIcon/>
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