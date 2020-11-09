import './App.css';
import React, {useState, useEffect} from 'react'

function Item(match) {
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
            <h1>{item._appliance_name}</h1>
        </div>
    )
}

export default Item;