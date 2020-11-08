import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './';

describe('Avatar', () => {
  
  it('should render default component correctly', () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render component correctly when type equals wallet', () => {
    const tree = renderer.create(<Avatar type="wallet" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
