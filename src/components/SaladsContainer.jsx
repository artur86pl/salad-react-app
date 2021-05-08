import React from 'react';
import { Component } from 'react'
import Fab from '@material-ui/core/Fab';

import CreateSalad from './secondComponents/CreateSalad';
import ProductSingle from './secondComponents/ProductSingle';

import SearchIcon from '@material-ui/icons/Search';

class SaladsContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            salads: [],
            products: []
        };
    }
        
    componentDidMount() {
        fetch("http://localhost:3200/salads")
        .then(response => response.json())
        .then(data => this.setState({salads: data}));

        fetch("http://localhost:3200/products")
        .then(response => response.json())
        .then(data => this.setState({products: data}));
    };

    render() {
        const { salads, products} = this.state;

        return (
            <div className="inner-container"> 
                <CreateSalad products={products} />                
                <div className="flex-between">
                    <h1>
                        Zapisane Sałatki
                    </h1>
                    <Fab size="small" color="secondary" aria-label="search">
                        <SearchIcon />
                    </Fab>
                </div>                    
                <div className="flex-list">
                    {salads.map(product =>
                        <ProductSingle key={product.id} product={product} />)}
                </div>    
            </div>
        );
    }
}

export default SaladsContainer;
