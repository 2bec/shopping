import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from 'semantic-ui-react';

import TopMenu from 'components/Menu';

import ProductList from 'components/ProductsList';


/*
** Destination render
*/
const destination = document.getElementById('root');

const Main = () => (
  <Container>
    <TopMenu />
    <ProductList />
  </Container>
);

ReactDOM.render(
  <Main />,
  destination
);