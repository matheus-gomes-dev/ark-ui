import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

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

const Template = (args) => (
  <Router>
    <HeaderComponent {...args} />
  </Router>
);

export const Header = Template.bind({});