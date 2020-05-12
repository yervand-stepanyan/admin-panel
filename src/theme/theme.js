import { createMuiTheme } from '@material-ui/core';

const DRAWER_WIDTH = 240;
const MAIN_SPACING_VALUE = 14;

const sidebarColor = '#1B2133';
const whiteColor = '#FFFFFF';

const theme = createMuiTheme({
  drawer: {
    drawerWidth: DRAWER_WIDTH,
    drawerColor: sidebarColor,
  },
  color: {
    whiteColor,
  },
  customSpacing: {
    base: `${MAIN_SPACING_VALUE}px`,
  },
});

export default theme;
