import React from 'react';
import ReactDOM from 'react-dom';

import Avatar from './';

describe('Avatar', () => {
  
  it('should render avatar component and not crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Avatar />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});