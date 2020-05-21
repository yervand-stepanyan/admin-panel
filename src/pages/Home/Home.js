import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { HOME_LABEL } from '../../globals/constants';
import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{HOME_LABEL}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
