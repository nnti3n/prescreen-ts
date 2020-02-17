/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './styles/styles.scss';
require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <Root />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <NewRoot />,
      document.getElementById('app')
    );
  });
}
