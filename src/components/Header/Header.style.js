import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.color.whiteColor,
    color: 'black',
    marginLeft: theme.drawer.drawerWidth,
    width: `calc(100% - ${theme.drawer.drawerWidth}px)`,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    display: 'flex',
    marginRight: `${theme.customSpacing.base}`,
    width: '100%',
  },
  searchInputWrapper: {
    marginLeft: `${theme.customSpacing.base}`,
    width: '100%',
  },
  searchIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${theme.color.headerButtonColor}`,
    cursor: 'pointer',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  button: {
    color: `${theme.color.headerButtonColor}`,
  },
}));
