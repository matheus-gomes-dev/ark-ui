import React from 'react';
import ReactDOM from 'react-dom';

import HeaderAction from './';

describe('HeaderAction', () => {
  
  it('should render component for list wallets action', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HeaderAction action="list-wallets" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render component for import wallet action', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HeaderAction action="import-wallet" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render component for add wallet action', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HeaderAction action="add-wallet" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
