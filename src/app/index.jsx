import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from "../App.jsx";

render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app'));



/*
ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();*/