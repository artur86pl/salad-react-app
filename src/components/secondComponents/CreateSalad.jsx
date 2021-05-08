import React from 'react';

import { Paper, Fab, Typography, Slider } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';


const CreateSalad = ( { products } ) => {
    const recipe = [1,5,6,8,9];
    let sumKcl = 0;
    const kclArr = recipe.map(componentId => products[componentId] && sumKcl + products[componentId].kcl);
    const kclSum = kclArr.reduce((a,b) => a + b, 0);
    const sliderColor = kclSum < 450 ? "green" : kclSum < 750 ? "yellow" : "orange";
    

    return (        
    <div>
        <div className="flex-center">
            <Fab size="small" color="secondary" aria-label="favorite">
                <FavoriteIcon />
            </Fab>
            <h1>
                Nazwa Sałatki
            </h1>
        </div>
        <Paper className="flex-list">
            {recipe.map(componentId =>
                <div className="half-width" key={componentId}>
                    {products[componentId] && products[componentId].name} (100g) - 
                    {products[componentId] && products[componentId].kcl} kcl</div>)}      
        </Paper>
        
        <Typography id="discrete-slider-always" gutterBottom>
            Kaloryczność Sałatki: {kclSum} kcl
        </Typography>
        {kclSum && <Slider
                    className={sliderColor}
                    value={kclSum}
                    max={1000}
                    valueLabelDisplay="on"
        />}
    </div>
    );
}

export default CreateSalad;
