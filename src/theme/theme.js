import { createMuiTheme } from '@material-ui/core';

const BORDER_RADIUS = 3;
const DRAWER_WIDTH = 240;
const MAIN_SPACING_VALUE = 14;
const SCROLLBAR_HEIGHT = 8;
const SCROLLBAR_WIDTH = 8;
const SCROLLBAR_THUMB_BORDER_RADIUS = 10;
const SCROLLBAR_TRACK_BORDER_RADIUS = 10;

const backgroundColor = '#E4EAF6';
const cardColorBlue = '#4285F4';
const cardColorBlueHover = '#274f92';
const cardColorGreen = '#34A853';
const cardColorGreenHover = '#1f6431';
const cardColorRed = '#EA4335';
const cardColorRedHover = '#8c281f';
const cardColorYellow = '#FBBC05';
const cardColorYellowHover = '#967003';
const listItemColor = '#FFFFFF';
const listSubHeaderColor = '#7f7f7f';
const headerButtonColor = '#7a7a7a';
const scrollbarColor = '#a1a1a1';
const scrollbarHoverColor = '#6d6d6d';
const scrollbarTrackColor = '#808080';
const searchLiHover = '#f1f1f1';
const sidebarColor = '#1B2133';
const tableShadowColor = '#999999';
const textColorBlack = '#000000';
const whiteColor = '#FFFFFF';

const theme = createMuiTheme({
  border: {
    borderRadius: {
      base: `${BORDER_RADIUS}px`,
    },
  },
  color: {
    backgroundColor,
    cardColorBlue,
    cardColorBlueHover,
    cardColorGreen,
    cardColorGreenHover,
    cardColorRed,
    cardColorRedHover,
    cardColorYellow,
    cardColorYellowHover,
    listItemColor,
    listSubHeaderColor,
    headerButtonColor,
    scrollbarColor,
    scrollbarHoverColor,
    scrollbarTrackColor,
    searchLiHover,
    sidebarColor,
    tableShadowColor,
    textColorBlack,
    whiteColor,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    xxxLarge: `${MAIN_SPACING_VALUE * 7}px`,
  },
  drawer: {
    drawerWidth: DRAWER_WIDTH,
    drawerColor: sidebarColor,
  },
  scrollbar: {
    scrollbarHeight: `${SCROLLBAR_HEIGHT}px`,
    scrollbarWidth: `${SCROLLBAR_WIDTH}px`,
    scrollbarThumbBorderRadius: `${SCROLLBAR_THUMB_BORDER_RADIUS}px`,
    scrollbarTrackBorderRadius: `${SCROLLBAR_TRACK_BORDER_RADIUS}px`,
  },
});

export default theme;
