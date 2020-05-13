import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  collectionCardContainer: {
    margin: `0 ${theme.customSpacing.small}`,
  },
  card: {
    color: theme.color.whiteColor,
    cursor: 'pointer',
    height: '100px',
    minWidth: '250px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  blue: {
    backgroundColor: theme.color.cardColorBlue,
  },
  red: {
    backgroundColor: theme.color.cardColorRed,
  },
  yellow: {
    backgroundColor: theme.color.cardColorYellow,
  },
  green: {
    backgroundColor: theme.color.cardColorGreen,
  },
}));
