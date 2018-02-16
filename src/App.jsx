import React from 'react';
import ReactDOM from 'react-dom';

import {
  blueGrey600,
  cyan700,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import ProductList from './Components/ProductsList';

const destination = document.getElementById('root')

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blueGrey600,
    primary2Color: grey100,
    primary3Color: grey100,
    accent1Color: grey100,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: grey100,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: grey100,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    height: 60,
  },
});

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="Menu" />
    <ProductList />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  destination
);