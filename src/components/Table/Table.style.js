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
    '&::-webkit-scrollbar': {
      height: theme.scrollbar.scrollbarHeight,
      width: theme.scrollbar.scrollbarWidth,
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': `inset 0 0 5px ${theme.color.scrollbarTrackColor}`,
      borderRadius: theme.scrollbar.scrollbarTrackBorderRadius,
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.color.scrollbarColor,
      borderRadius: theme.scrollbar.scrollbarThumbBorderRadius,
      '&:hover': {
        background: theme.color.scrollbarHoverColor,
      },
    },
  },
  table: {
    width: '100%',
    '&$table, th, td': {
      border: '1px solid #dddddd',
      borderCollapse: 'collapse',
    },
  },
  th: {
    '&$th': {
      boxShadow: '0 2px 2px -1px rgba(0, 0, 0, 0.4)',
      padding: `0 ${theme.customSpacing.small}`,
      position: 'sticky',
      top: -1,
      'z-index': 2,
    },
  },
  tr: {
    '&$tr:nth-child(even)': {
      backgroundColor: '#dddddd',
    },
  },
  dataCell: {
    padding: `0 ${theme.customSpacing.small}`,
  },
  clickableDataCell: {
    cursor: 'pointer',
  },
  blue: {
    backgroundColor: theme.color.cardColorBlue,
    color: theme.color.whiteColor,
  },
  green: {
    backgroundColor: theme.color.cardColorGreen,
    color: theme.color.whiteColor,
  },
  red: {
    backgroundColor: theme.color.cardColorRed,
    color: theme.color.whiteColor,
  },
  yellow: {
    backgroundColor: theme.color.cardColorYellow,
    color: theme.color.whiteColor,
  },
}));
