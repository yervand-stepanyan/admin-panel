import { createMuiTheme } from '@material-ui/core';

const DRAWER_WIDTH = 240;
const MAIN_SPACING_VALUE = 14;

const backgroundColor = '#E4EAF6';
const listSubHeaderColor = '#7f7f7f';
const headerButtonColor = '#7a7a7a';
const sidebarColor = '#1B2133';
const whiteColor = '#FFFFFF';

const theme = createMuiTheme({
  drawer: {
    drawerWidth: DRAWER_WIDTH,
    drawerColor: sidebarColor,
  },
  color: {
    backgroundColor,
    listSubHeaderColor,
    headerButtonColor,
    sidebarColor,
    whiteColor,
  },
  customSpacing: {
    base: `${MAIN_SPACING_VALUE}px`,
  },
});

export default theme;
