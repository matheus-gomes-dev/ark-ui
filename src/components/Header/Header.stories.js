import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderComponent from './';

const Template = (args) => (
  <Router>
    <HeaderComponent {...args} />
  </Router>
);

export const Header = Template.bind({});

const stories = {
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

export default stories;
