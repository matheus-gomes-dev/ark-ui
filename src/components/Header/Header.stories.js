import React from 'react';

import HeaderComponent from './';

export default {
  title: 'Header/Header',
  component: HeaderComponent,
  parameters: {
    backgrounds: {
      default: 'Blue Background',
      values: [
        { name: 'Blue Background', value: '#30385D' },
      ],
    },
  },
};

const Template = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});