import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {loadMockData} from './actions/actions';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

loadMockData();