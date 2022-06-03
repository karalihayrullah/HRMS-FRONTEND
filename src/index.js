import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"
import configureStore from "./redux/configureStore"
import "react-toastify/dist/ReactToastify.min.css"
import 'alertifyjs/build/css/alertify.min.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

