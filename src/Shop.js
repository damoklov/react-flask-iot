import './App.css';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function Shop() {
    useEffect(() => {
            fetchItems();
        }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://127.0.0.1:5000/smart_home_appliance');
        const items = await data.json();
        console.log(items.smart_home_appliances);
        setItems(items.smart_home_appliances);
    };

    return (
        <div className="Shop">
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item._appliance_name}</Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop;