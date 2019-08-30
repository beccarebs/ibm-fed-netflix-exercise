import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Gallery.scss';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  gallerySpacing: {
    padding: '0 0 40px 0'
  },
  heading: {
    marginTop: '40px'
  }
});

export default function Gallery(props) {
  const classes = useStyles();

  return (
    <div id="gallery" className={classes.gallerySpacing}>
    <ul className="lightrope">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <Typography className={classes.heading} gutterBottom align="center" variant="h2" component="h2">
      Gallery
    </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
        {props.content.gallery.map((item) =>
          <Grid item key={item.text} md={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.text}
                  height="200"
                  image={item.src}
                  title={item.text}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.text}
                  </Typography>
                  {item.reference !== undefined &&
                    <Typography variant="body2" color="textSecondary" component="p">
                      <Link href={item.reference} target="_blank">Reference</Link>
                    </Typography>
                  }
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )}    
        </Grid>
      </Container>
    </div>
  );
}