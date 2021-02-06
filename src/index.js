import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store';
import axios from 'axios';

ReactDOM.render(
  <Provider store = {store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


axios.defaults.withCredential=true
axios.defaults.baseURL='https://jsonplaceholder.typicode.com'


reportWebVitals();
