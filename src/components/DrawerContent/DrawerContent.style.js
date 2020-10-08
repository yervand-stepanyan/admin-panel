import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  logoAndIconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100px',
  },
  logo: {
    width: '100px',
  },
  list: {
    color: theme.color.listItemColor,
  },
  listSubHeader: {
    color: theme.color.listSubHeaderColor,
  },
  icon: {
    color: theme.color.listItemColor,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    color: theme.color.listItemColor,
    textDecoration: 'none',
  },
}));
