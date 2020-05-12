import { createMuiTheme } from '@material-ui/core';

const DRAWER_WIDTH = 240;
const MAIN_SPACING_VALUE = 14;

const listSubHeaderColor = '#7f7f7f';
const sidebarColor = '#1B2133';
const whiteColor = '#FFFFFF';

const theme = createMuiTheme({
  drawer: {
    drawerWidth: DRAWER_WIDTH,
    drawerColor: sidebarColor,
  },
  color: {
    listSubHeaderColor,
    whiteColor,
  },
  customSpacing: {
    base: `${MAIN_SPACING_VALUE}px`,
  },
});

export default theme;
