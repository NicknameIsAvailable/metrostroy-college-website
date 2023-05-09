import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/storage";
import {CookiesProvider} from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </CookiesProvider>
);
