import React from 'react';
import ReactDOM from 'react-dom';

import Input from './';

describe('Input', () => {
  
  it('should render input component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Input label="fake-label" onChange={() => jest.fn()} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});