import React , {Fragment} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './containers/home';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
    primaryBackground : "teal",
    primaryColor : "black",
    secondaryColor : "white",
    extraSmallScreen : "576px",
    smallScreen : "768px",
    mediumScreen : "992px",
    largeScreen : "1200px;"
};

const GlobalStyles = createGlobalStyle`
    html,body{
        height : 100%
    }
    body{
        margin : 0;
        padding : 0;
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.25;
    }
    .d-flex{
        display :flex;
    }
    .mr-3{
        margin-right: 1rem;
    }
    .pb-3{
        padding-bottom:1rem;
    }
    .pr-3{
        padding-right: 1rem;
    }
`
const app = (
    <Fragment>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    </Fragment>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
