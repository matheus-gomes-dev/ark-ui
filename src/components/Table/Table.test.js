import React from 'react';
import ReactDOM from 'react-dom';

import Table from './';

describe('Table', () => {
  
  it('should render table component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Table />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});