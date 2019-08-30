import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '80px 0'
    },
    paragraphs: {
        marginBottom: '20px'
    },
    videoframe: {
        width: '100%',
        height: '100%',
        paddingBottom: '56.25%'
    }
  }),
);

export default function Inspiration(props) {
  const classes = useStyles();


  return (
    <div id="inspiration" className={classes.root}>
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item md={4} align="center">
                    <img className={classes.paragraphs} src={require('../../assets/images/stanger-things_raw.png')} alt="Stranger Things logo" />
                    <Typography variant="h4" component="h2">
                        Local Inspiration
                    </Typography>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="h3" component="h2">
                        &ldquo;{props.content.quote.text}&rdquo;
                    </Typography>
                    <Typography variant="h4" component="h2">
                        &mdash; {props.content.quote.author}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.root}>
                <Grid item md={4}>
                    {props.content.snippets.map((snippet) =>
                        <Typography key={snippet} className={classes.paragraphs} variant="body2" color="textSecondary" component="p">
                        {snippet}
                    </Typography>
                    )}
                    <ul>
                    {props.content.locations.map((location) =>
                        <li key={location}>
                            <Typography className={classes.paragraphs} variant="body2" color="textSecondary" component="p">
                                {location}
                            </Typography>
                        </li>
                    )}
                    </ul>
                </Grid>
                <Grid item md={8}>
                    <div className="video"
                    style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* 16:9 */,
                        paddingTop: 0,
                        height: 0,
                        width: "100%"
                    }}>
                        <iframe
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                            title="Stranger Things N&O"
                            src={`${props.content['video-embed']}`}
                            frameBorder="0"/>
                    </div>
                </Grid>
                
            </Grid>
        </Container>
    </div>
  );
}