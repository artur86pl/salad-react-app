import React from 'react';

import { Button, Paper } from '@material-ui/core';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import ErrorIcon from '@material-ui/icons/Error';

const ProductSingle = ({product, onDelete}) =>(
        <Paper className="component">
            <h4 className="flex-center">
                {product && product.name}
                {product.spice && <WhatshotIcon color="primary"/>}
                {product.allergen && <ErrorIcon color="primary"/>}
            </h4>
            <p>
                Rodzaj: {product && product.type}
            </p>
            <p>
                Kalorie: {product && product.kcl} kcl/100g
            </p>
            <p>
                {product ? product.description : product.loremImpsum}
            </p>
            <Button 
             onClick={() => onDelete(product.id)} 
             size="small" 
             color="primary">
                Delete
            </Button>
        </Paper>
    );

export default ProductSingle;
