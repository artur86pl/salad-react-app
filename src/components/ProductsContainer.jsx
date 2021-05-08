import React from 'react';
import { Component } from 'react';

import {Fab, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';

import AddProduct from './secondComponents/AddProduct';
import ProductSingle from './secondComponents/ProductSingle'; 

import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

class ProductsContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            products: [],
            expanded: false
        };
    }

    componentDidMount() {
        this.getProducts();
    };

    getProducts = () => {
        fetch("http://localhost:3200/products")
        .then(response => response.json())
        .then(data => this.setState({products: data}));
    }

    expandPanel = () => {
        this.setState({expanded: !this.state.expanded});
    };

    onDelete = (id) => { 
        fetch(`http://localhost:3200/products/${id}`, {
        method: 'DELETE',
        header: {'Content-Type': 'application/json'},
        })
    .then((response) => response.json())
    .then(() => this.getProducts())
    .catch((error) => {console.error('Error: ', error);});
    };

    render(){
        const products = this.state.products;

        return(            
            <div className="inner-container">
                <ExpansionPanel expanded={ this.state.expanded }>
                    <ExpansionPanelSummary id="no-height"/>
                    <AddProduct products={products} expandPanel={this.expandPanel}/>
                </ExpansionPanel>

                <div>
                    <div className="flex-between">
                        <div className="flex-center">
                            <Fab onClick={this.expandPanel} size="small" color="secondary" aria-label="add">
                                <AddIcon />
                            </Fab>                         
                            <h1>
                                Zapisane Produkty
                            </h1>
                        </div>                                     
                        <Fab size="small" color="secondary" aria-label="search">
                            <SearchIcon />
                        </Fab>                            
                    </div>
                    <div className="flex-list">
                        {products.map(product => 
                            <ProductSingle key={product.id} product={product} onDelete={this.onDelete}/>)}
                    </div>                
                </div>
            </div>
        );
    }
}

export default ProductsContainer;
