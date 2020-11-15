import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Component from './';
import api from 'utils/api';
import store from 'store';

describe('ImportWallet', () => {
  
  it('should render the component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store({ api })}>
        <Router>
          <Component />
        </Router>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});