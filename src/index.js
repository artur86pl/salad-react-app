import React from 'react';
import {render} from 'react-dom'

import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './assets/Theme';
import './assets/styles.scss';

import App from './App';

render(     
    <MuiThemeProvider theme={theme}> 
        <CssBaseline />
        <App />     
    </MuiThemeProvider>,   
    document.getElementById('root') 
);
