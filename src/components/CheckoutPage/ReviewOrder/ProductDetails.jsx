import React, {Component} from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/productActions";


class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: useStyles
    }
  }

  total() {
      return this.props.items.reduce((total, item) => {
          return total + item._repair_price;
      }, 0);
  }

  render()
    {
      if (this.props.items.length === 0) {
        return (
            <div className="ProductDetails">
              <h1>No products were added</h1>
            </div>
        )
      } else {
        return (
            <List disablePadding>
              {this.props.items.map(product => (
                  <ListItem className={this.state.classes.listItem}
                            key={product._appliance_name}>
                    <ListItemText primary={product._appliance_name}
                                  secondary={product._connection_protocol}/>
                    <Typography variant="body2">${product._repair_price}</Typography>
                  </ListItem>
              ))}
              <ListItem className={this.state.classes.listItem}>
                <ListItemText primary="Total"/>
                <Typography variant="subtitle1"
                            className={this.state.classes.total}>
                  ${this.total().toFixed(2)}
                </Typography>
              </ListItem>
            </List>
        );
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
