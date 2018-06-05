import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const bootstrap = require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
