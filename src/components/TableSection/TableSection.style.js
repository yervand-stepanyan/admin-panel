import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tableSectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.customSpacing.base,
    padding: `0 ${theme.customSpacing.small} ${theme.customSpacing.small} ${theme.customSpacing.small}`,
  },
}));
