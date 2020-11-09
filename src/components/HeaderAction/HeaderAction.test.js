import React from 'react';
import renderer from 'react-test-renderer';

import HeaderAction from './';

describe('HeaderAction', () => {
  
  it('should render list wallets component correctly', () => {
    const tree = renderer.create(<HeaderAction action="list-wallets" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render import wallet component correctly', () => {
    const tree = renderer.create(<HeaderAction action="import-wallet" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render add wallet component correctly', () => {
    const tree = renderer.create(<HeaderAction action="add-wallet" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
