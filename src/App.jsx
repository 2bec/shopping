import React from 'react';
import ReactDOM from 'react-dom';

import {
  blueGrey600,
  cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500, grey600, grey700,
  white, black, darkBlack, darkWhite, transparent, lightWhite, lightBlack,
  red500,
} from 'material-ui/styles/colors';
import {
  darken, fade, emphasize, lighten
} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';

import ProductList from './Components/ProductsList';


/*
** Destination render
*/
const destination = document.getElementById('root');

/*
** Custom Theme.
** More on Colors: http://www.material-ui.com/#/customization/colors
** TODO:
** 1) Criar arquitetura para armazenar/acessar os styles;
** 2) Remover inline styles;
*/
const baseTheme = getMuiTheme(lightBaseTheme);
const muiTheme = getMuiTheme({
  appBar: {
    color: grey100,
    textColor: darkBlack,
    height: 60,
    titleFontWeight: 'Normal',
    padding: 10,
  },
  avatar: {
    color: grey100,
    backgroundColor: emphasize(darkBlack, 0.26),
  },
  badge: {
    color: blueGrey600,
    textColor: white,
    primaryColor: grey100,
    primaryTextColor: white,
    secondaryColor: grey100,
    secondaryTextColor: grey100,
    fontWeight: 'Medium',
  },
  bottomNavigation: {
    backgroundColor: pinkA200,
    unselectedColor: fade(pinkA200, 0.54),
    selectedColor: pinkA200,
    height: 56,
    unselectedFontSize: 12,
    selectedFontSize: 14,
  },
  button: {
    height: 36,
    minWidth: 88,
    iconButtonSize: 20 * 2,
  },
  card: {
    titleColor: fade(cyan700, 0.87),
    subtitleColor: fade(cyan700, 0.54),
    fontWeight: 'Medium',
  },
  cardMedia: {
    color: darkWhite,
    overlayContentBackground: lightBlack,
    titleColor: darkWhite,
    subtitleColor: lightWhite,
  },
  cardText: {
    textColor: white,
  },
  checkbox: {
    boxColor: white,
    checkedColor: red500,
    requiredColor: red500,
    disabledColor: lightBlack,
    labelColor: white,
    labelDisabledColor: lightBlack,
  },
  chip: {
    backgroundColor: emphasize(grey400, 0.12),
    deleteIconColor: fade(white, 0.26),
    textColor: fade(white, 0.87),
    fontSize: 14,
    fontWeight: 'Normal',
    shadow: `0 1px 6px ${fade(lightWhite, 0.12)},
      0 1px 4px ${fade(lightWhite, 0.12)}`,
  },
  datePicker: {
    color: red500,
    textColor: grey700,
    calendarTextColor: white,
    selectColor: grey300,
    selectTextColor: grey700,
    calendarYearBackgroundColor: grey400,
    headerColor: red500 || red500,
  },
  dialog: {
    titleFontSize: 22,
    bodyFontSize: 16,
    bodyColor: fade(white, 0.6),
  },
  dropDownMenu: {
    accentColor: black,
  },
  enhancedButton: {
    tapHighlightColor: transparent,
  },
  flatButton: {
    color: transparent,
    buttonFilterColor: '#999999',
    disabledTextColor: fade(white, 0.3),
    textColor: white,
    primaryTextColor: red500,
    secondaryTextColor: pinkA200,
    fontSize: 12,
    fontWeight: 'Medium',
  },
  floatingActionButton: {
    buttonSize: 56,
    miniSize: 40,
    color: red500,
    iconColor: grey700,
    secondaryColor: pinkA200,
    secondaryIconColor: grey700,
    disabledTextColor: lightBlack,
    disabledColor: emphasize(grey400, 0.12),
  },
  gridTile: {
    textColor: white,
  },
  icon: {
    color: grey400,
    backgroundColor: red500,
  },
  inkBar: {
    backgroundColor: pinkA200,
  },
  drawer: {
    width: 5 * 4,
    color: grey400,
  },
  listItem: {
    nestedLevelDepth: 18,
    secondaryTextColor: red500,
    leftIconColor: grey600,
    rightIconColor: grey600,
  },
  menu: {
    backgroundColor: grey400,
    containerBackgroundColor: grey400,
  },
  menuItem: {
    dataHeight: 32,
    height: 48,
    hoverColor: fade(white, 0.1),
    padding: 10,
    selectedTextColor: pinkA200,
    rightIconDesktopFill: grey600,
  },
  menuSubheader: {
    padding: 10,
    borderColor: black,
    textColor: red500,
  },
  overlay: {
    backgroundColor: lightBlack,
  },
  paper: {
    color: white,
    backgroundColor: grey400,
    zDepthShadows: [
      [1, 6, 0.12, 1, 4, 0.12],
      [3, 10, 0.16, 3, 10, 0.23],
      [10, 30, 0.19, 6, 10, 0.23],
      [14, 45, 0.25, 10, 18, 0.22],
      [19, 60, 0.30, 15, 20, 0.22],
    ].map((d) => (
      `0 ${d[0]}px ${d[1]}px ${fade(lightWhite, d[2])},
       0 ${d[3]}px ${d[4]}px ${fade(lightWhite, d[5])}`
    )),
  },
  radioButton: {
    borderColor: white,
    backgroundColor: grey700,
    checkedColor: red500,
    requiredColor: red500,
    disabledColor: lightBlack,
    size: 24,
    labelColor: white,
    labelDisabledColor: lightBlack,
  },
  raisedButton: {
    color: grey700,
    textColor: white,
    primaryColor: red500,
    primaryTextColor: grey700,
    secondaryColor: pinkA200,
    secondaryTextColor: grey700,
    disabledColor: darken(grey700, 0.1),
    disabledTextColor: fade(white, 0.3),
    fontSize: 12,
    fontWeight: 'Medium',
  },
  refreshIndicator: {
    strokeColor: black,
    loadingStrokeColor: red500,
  },
  ripple: {
    color: fade(white, 0.87),
  },
  slider: {
    trackSize: 2,
    trackColor: red500,
    trackColorSelected:black,
    handleSize: 12,
    handleSizeDisabled: 8,
    handleSizeActive: 18,
    handleColorZero: red500,
    handleFillColor: grey700,
    selectionColor: red500,
    rippleColor: red500,
  },
  snackbar: {
    textColor: grey700,
    backgroundColor: white,
    actionColor: pinkA200,
  },
  subheader: {
    color: fade(white, 0.54),
    fontWeight: 'Medium',
  },
  stepper: {
    backgroundColor: 'transparent',
    hoverBackgroundColor: fade(black, 0.06),
    iconColor: red500,
    hoveredIconColor: grey700,
    inactiveIconColor: grey500,
    textColor: fade(black, 0.87),
    disabledTextColor: fade(black, 0.26),
    connectorLineColor: grey400,
  },
  svgIcon: {
    color: white,
  },
  table: {
    backgroundColor: grey400,
  },
  tableFooter: {
    borderColor: black,
    textColor:black,
  },
  tableHeader: {
    borderColor: black,
  },
  tableHeaderColumn: {
    textColor:black,
    height: 56,
    spacing: 24,
  },
  tableRow: {
    hoverColor: grey100,
    stripeColor: fade(lighten(red500, 0.5), 0.4),
    selectedColor: black,
    textColor: white,
    borderColor: black,
    height: 48,
  },
  tableRowColumn: {
    height: 48,
    spacing: 24,
  },
  tabs: {
    backgroundColor: red500,
    textColor: fade(grey700, 0.7),
    selectedTextColor: grey700,
  },
  textField: {
    textColor: white,
    hintColor: lightBlack,
    floatingLabelColor: lightBlack,
    disabledTextColor: lightBlack,
    errorColor: red500,
    focusColor: red500,
    backgroundColor: 'transparent',
    borderColor: black,
  },
  timePicker: {
    color: grey700,
    textColor: grey700,
    accentColor: red500,
    clockColor: white,
    clockCircleColor: grey400,
    headerColor: red500 || red500,
    selectColor: grey300,
    selectTextColor: grey700,
  },
  toggle: {
    thumbOnColor: red500,
    thumbOffColor: grey100,
    thumbDisabledColor: black,
    thumbRequiredColor: red500,
    trackOnColor: fade(red500, 0.5),
    trackOffColor: red500,
    trackDisabledColor: red500,
    labelColor: white,
    labelDisabledColor: lightBlack,
    trackRequiredColor: fade(red500, 0.5),
  },
  toolbar: {
    color: fade(white, 0.54),
    hoverColor: fade(white, 0.87),
    backgroundColor: darken(grey100, 0.05),
    height: 56,
    titleFontSize: 20,
    iconColor: fade(white, 0.4),
    separatorColor: fade(white, 0.175),
    menuHoverColor: fade(white, 0.1),
  },
  tooltip: {
    color: white,
    rippleBackgroundColor: grey700,
    opacity: 0.9,
  },
}, muiTheme, {
  baseTheme, // To provide backward compatibility.
  rawTheme: baseTheme, // To provide backward compatibility.
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