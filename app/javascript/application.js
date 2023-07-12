// Update the entry file to include the necessary imports and rendering of the app
import '@hotwired/turbo-rails';
import './controllers'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './components/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>,
  </Provider>,

  document.getElementById('root'),
);