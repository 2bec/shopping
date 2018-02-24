import React from 'react';
import ReactDOM from 'react-dom';

import ContentWrapper from 'components/ContentWrapper'

const destination = document.getElementById('root')

const Main = () => (
  <ContentWrapper />
);

ReactDOM.render(
  <Main />,
  destination
);