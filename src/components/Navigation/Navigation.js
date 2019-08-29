import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: '20px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Navigation(props) {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" >
        <Toolbar>
          <Typography variant="h4" color="primary" className={classes.title}>
            {props.content.heading}
          </Typography>
          <LanguageSwitcher {...props} />
        </Toolbar>
      </AppBar>
    </div>
  );
}