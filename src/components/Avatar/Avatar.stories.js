import React from 'react';

import Avatar from './';

const Template = (args) => <Avatar {...args} />;

export const User = Template.bind({});

const stories = {
  title: 'Header/Avatar',
  component: Avatar
};
export default stories;
