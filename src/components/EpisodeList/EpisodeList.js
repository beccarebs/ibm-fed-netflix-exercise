import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: '#ffffff',
        color: theme.palette.primary.main
    }
  }),
);

export default function EpisodeList(props) {
    const classes = useStyles();
    const episodeList = props.content['episode-list'];

    const seasonOneEpisodes = episodeList.filter( (episode) => {
        return episode.season === 1;
    }).sort( (a,b) => { 
        return a.rating - b.rating
    });

    const seasonTwoEpisodes = episodeList.filter( (episode) => {
        return episode.season === 2;
    }).sort( (a,b) => { 
        return a.rating - b.rating
    });
    
  return (
    <div id="episodes">
        <Typography gutterBottom align="center" variant="h2" component="h2">
            Episode List
        </Typography>
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Typography className={classes.heading} gutterBottom align="center" variant="h6" component="h6">
                        Season 1 Episodes by Rating
                    </Typography>
                    <List className={classes.root}>
                    {seasonOneEpisodes.map((episode) =>
                        <ListItem key={episode.name}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <StarIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={episode.name} secondary={`Rating: ${episode.rating}`} />
                        </ListItem>
                    )} 
                    </List>
                </Grid>
                <Grid item md={6}>
                    <Typography className={classes.heading} gutterBottom align="center" variant="h6" component="h6">
                        Season 2 Episodes by Rating
                    </Typography>
                    <List className={classes.root}>
                    {seasonTwoEpisodes.map((episode) =>
                        <ListItem key={episode.name}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <StarIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={episode.name} secondary={`Rating: ${episode.rating}`} />
                        </ListItem>
                    )} 
                    </List>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}