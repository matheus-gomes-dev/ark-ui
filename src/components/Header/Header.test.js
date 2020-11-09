import React from 'react';
import ReactDOM from 'react-dom';

import Header from './';

describe('Header', () => {
  
  it('should render header and not crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Header />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});