import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: `0 ${theme.customSpacing.base}`,
  },
}));
