import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {likeNewsPost,deleteNewsPost } from '../../../actions/posts';
import useStyles from './styles';

const NewsPost = ({ Newspost, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={Newspost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={Newspost.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{Newspost.author}</Typography>
        <Typography variant="body2">{moment(Newspost.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(Newspost._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{Newspost.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{Newspost.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{Newspost.newsBody}</Typography>
      </CardContent>
       <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" 
          onClick={() => dispatch(likeNewsPost(Newspost._id))}
        ><ThumbUpAltIcon fontSize="small" /> Like {Newspost.LikeNum} </Button>
        <Button size="small" color="primary" 
          onClick={() => dispatch(deleteNewsPost(Newspost._id))}
        ><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions> 
    </Card>
  );
};

export default NewsPost;