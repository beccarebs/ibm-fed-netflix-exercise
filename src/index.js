import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette:{
        background:{
            paper: '#000'
        },
        primary: {
            main: "#f53317"
        },
        type: "dark"
    },
    typography:{
       fontFamily: "'itc-avant-garde-gothic-pro', serif",
       h1: {
        fontFamily: "'itc-benguiat', sans-serif"
       },
       h2: {
        fontFamily: "'itc-benguiat', sans-serif"
       },
       h3: {
        fontFamily: "'itc-benguiat', sans-serif"
       },
       h4: {
        fontFamily: "'itc-benguiat', sans-serif"
       },
       h5: {
        fontFamily: "'itc-benguiat', sans-serif"
       },
       h6: {
        fontFamily: "'itc-benguiat', sans-serif"
       }
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
