import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.color.whiteColor,
    borderRadius: theme.border.borderRadius.base,
    boxShadow: `0 8px 6px -6px ${theme.color.tableShadowColor}`,
    width: '100%',
  },
}));
