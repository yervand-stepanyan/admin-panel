import { createMuiTheme } from '@material-ui/core';

const DRAWER_WIDTH = 240;
const MAIN_SPACING_VALUE = 14;

const backgroundColor = '#E4EAF6';
const cardColorBlue = '#4285F4';
const cardColorGreen = '#34A853';
const cardColorRed = '#EA4335';
const cardColorYellow = '#FBBC05';
const listSubHeaderColor = '#7f7f7f';
const headerButtonColor = '#7a7a7a';
const scrollbarColor = '#a1a1a1';
const scrollbarHoverColor = '#6d6d6d';
const sidebarColor = '#1B2133';
const whiteColor = '#FFFFFF';

const theme = createMuiTheme({
  drawer: {
    drawerWidth: DRAWER_WIDTH,
    drawerColor: sidebarColor,
  },
  color: {
    backgroundColor,
    cardColorBlue,
    cardColorRed,
    cardColorYellow,
    cardColorGreen,
    listSubHeaderColor,
    headerButtonColor,
    scrollbarColor,
    scrollbarHoverColor,
    sidebarColor,
    whiteColor,
  },
  customSpacing: {
    base: `${MAIN_SPACING_VALUE}px`,
    xxxLarge: `${MAIN_SPACING_VALUE * 7}px`,
  },
});

export default theme;
