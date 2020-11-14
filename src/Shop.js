import './App.css';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from 'react-native';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Shop() {
    useEffect(() => {
            fetchItems();
        }, []);

    const [items, setItems] = useState([]);
    const classes = useStyles();
    const fetchItems = async () => {
        const data = await fetch('http://127.0.0.1:5000/smart_home_appliance');
        const items = await data.json();
        console.log(items.smart_home_appliances);
        setItems(items.smart_home_appliances);
    };

    return (
        <div className="Shop">
            <div className="shop__items">
            {items.map(item => (
                <div className="shop__item">
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item._appliance_name}</Link>
                </h1>
                <img src={item._pic} alt={"Pic"} width={"200px"} height={"200px"} className={"center"}/>
                    <div className={classes.root}>
                        <h2>${item._repair_price}</h2>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="info" key={item.id} href={`/shop/${item.id}`}>
                            <InfoIcon />
                        </IconButton>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Shop;