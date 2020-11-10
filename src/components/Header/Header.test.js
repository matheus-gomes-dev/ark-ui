import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './';
import api from 'utils/api';
import store from 'store';

describe('Header', () => {
  
  it('should render header and not crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store({ api })}>
        <Router>
          <Header />
        </Router>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});