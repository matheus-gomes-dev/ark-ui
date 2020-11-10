import React from 'react';
import ReactDOM from 'react-dom';

import Button from './';

describe('Button', () => {
  
  it('should render button component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button label="fake-label" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});