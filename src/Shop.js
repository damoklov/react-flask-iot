import './App.css';
import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import axios from "axios";
import useStyles from './Constants';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from "./components/actions/shopActions";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: true,
            filteredItems: [],
            data: '',
            query: '',
            cart: [],
            classes: useStyles
        };
    }

    async componentDidMount() {
        if (this.state.search === true) {
            this.state.loading = true;
            if (this.state.query === '' && this.state.data === '') {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance`);
                this.state.filteredItems = result.data.smart_home_appliances;
            } else if (this.state.query !== '' && this.state.data === '') {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance?protocol=${this.state.query}`);
                this.state.filteredItems = result.data.smart_home_appliances;
            } else if (this.state.query === '' && this.state.data !== '') {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance/search/${this.state.data}`);
                this.state.filteredItems = result.data.smart_home_appliances;
            } else {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance/search/${this.state.data}?protocol=${this.state.query}`);
                this.state.filteredItems = result.data.smart_home_appliances;
            }
            this.state.loading = false;
            this.state.data = '';
            this.state.query = '';
            this.state.search = false;
            this.setState(this.state);
            console.log(this.state);
        }
    };

    async componentDidUpdate(previousProps, previousState) {
        if (this.state.search === true) {
            this.state.loading = true;
            if (this.state.query === '' && this.state.data === '') {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance`);
                this.state.filteredItems = result.data.smart_home_appliances;
            } else if (this.state.query !== '' && this.state.data === '') {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance?protocol=${this.state.query}`);
                this.state.filteredItems = result.data.smart_home_appliances;
            } else if (this.state.query === '' && this.state.data !== '') {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance/search/${this.state.data}`);
                this.state.filteredItems = result.data.smart_home_appliances;
            } else {
                const result = await axios(`http://127.0.0.1:5000/smart_home_appliance/search/${this.state.data}?protocol=${this.state.query}`);
                this.state.filteredItems = result.data.smart_home_appliances;
            }
            this.state.loading = false;
            this.state.data = '';
            this.state.query = '';
            this.state.search = false;
            this.setState(this.state);
            console.log(this.state);
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.loading ? (
                    <div className="Shop">
                        <div className="loader">Loading...</div>
                    </div>
                ) : (
                    <div className="Shop">
                        <input
                            type="text"
                            placeholder="Protocol"
                            onChange={(e) => this.setState({query: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Item Title"
                            onChange={(e) => this.setState({data: e.target.value})}
                        />
                        <button type="button" onClick={() => this.setState({loading: true, search: true})}>
                            Search
                        </button>
                        <div className="shop__items">
                            {this.state.filteredItems.map((item, index) => (
                                <div className="shop__item">
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
                                            onClick={() => this.props.addToCart(item)}
                                            color="primary"
                                            aria-label="add to shopping cart">
                                            <AddShoppingCartIcon/>
                                        </IconButton>
                                        <IconButton color="primary"
                                                    aria-label="info"
                                                    key={index}
                                                    href={`/shop/${item.id}`}>
                                            <InfoIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);