import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from "./App.jsx";
import store from "./app/store/store";
import {Provider} from "react-redux";

render(<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>, document.getElementById('app'));



/*
ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();*/
