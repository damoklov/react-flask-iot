import './App.css';
import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useStyles from './Constants';


function Item(match) {
    const classes = useStyles();

    useEffect(() => {
            fetchItem();
        }, []);

    const [item, setItem] = useState({});
    const fetchItem = async () => {
        const fetchItem = await fetch(`http://127.0.0.1:5000/smart_home_appliance/${match.match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
    };

    return (
        <div className="Shop">
        <div className="shop__items">
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
                </div>
            </div>
        </div>
        </div>
    )
}

export default Item;