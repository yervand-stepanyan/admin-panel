import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.color.whiteColor,
    borderRadius: theme.border.borderRadius.base,
    boxShadow: `0 8px 6px -6px ${theme.color.tableShadowColor}`,
    padding: theme.customSpacing.base,
    width: '100%',
  },
  tableHeaderContainer: {
    width: '100%',
  },
  collectionNameContainer: {},
  tableWrapper: {
    maxHeight: '75vh',
    overflow: 'auto',
    width: '100%',
  },
  table: {
    width: '100%',
  },
}));
