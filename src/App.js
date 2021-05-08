import React from 'react';

import ProductsContainet from './components/ProductsContainer';
import  SaladsContainer   from './components/SaladsContainer';

import Grid from '@material-ui/core/Grid'
import './App.scss';

const App = () => 
(
  <div className="App">
    <header className="App-header">
      Web 1920_1
    </header>
    <div id="container">
      <Grid item xs={7}>
        <ProductsContainet />
      </Grid>
      <Grid item xs={5}>
        <SaladsContainer />
      </Grid>
    </div>
  </div>
);

export default App;
