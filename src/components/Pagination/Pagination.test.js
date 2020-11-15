import React from 'react';
import ReactDOM from 'react-dom';

import Pagination from './';

describe('Pagination', () => {
  
  it('should render pagination component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Pagination />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});