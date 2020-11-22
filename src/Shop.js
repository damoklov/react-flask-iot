import './App.css';
import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Shop() {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    const [data, setData] = useState('');
    const [query, setQuery] = useState('');
    const classes = useStyles();

  useEffect(() => {
      setSearch(false);
    const fetchData = async () => {
        if (search === true) {
            setLoading(true);
        if (query === '' && data === '') {
            const result = await axios(`http://127.0.0.1:5000/smart_home_appliance`);
            setFilteredItems(result.data.smart_home_appliances);
        } else if (query !== '' && data === '') {
            const result = await axios(`http://127.0.0.1:5000/smart_home_appliance?protocol=${query}`);
            setFilteredItems(result.data.smart_home_appliances);
        } else if (query === '' && data !== '') {
            const result = await axios(`http://127.0.0.1:5000/smart_home_appliance/search/${data}`);
            setFilteredItems(result.data.smart_home_appliances);
        } else {
            const result = await axios(`http://127.0.0.1:5000/smart_home_appliance/search/${data}?protocol=${query}`);
            setFilteredItems(result.data.smart_home_appliances);
        }
        setLoading(false);
        setQuery('');
        setData('');}
    };
    fetchData();
  }, [search, data, query]);

    return (
        <Fragment>
            {loading ? (
            <div className="Shop">
                 <div className="loader">Loading...</div>
             </div>
      ) : (
        <div className="Shop">
          <input
            type="text"
            placeholder="Protocol"
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Item Title"
            onChange={(e) => setData(e.target.value)}
          />
          <button type="button" onClick={() => setSearch(true)}>
        Search
          </button>
        <div className="shop__items">
        {filteredItems.map(item => (
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
    )}
        </Fragment> );
}

export default Shop;