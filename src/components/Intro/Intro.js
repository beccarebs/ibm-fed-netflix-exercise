import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/images/st3-all-up-logo-3200x1800.png";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height:'90vh',
      backgroundImage:`url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function Intro(props) {
  const classes = useStyles();

  return (
    <div id="intro" className={classes.root}>
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item sm={3}></Grid>
        <Grid item sm={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content.description}
          </Typography>
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>
      </Container>
    </div>
  );
}