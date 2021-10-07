import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createNewsPost, updateNewsPost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [newstData, setPostData] = useState({ author: '', title: '', newsBody: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.news.find((newsBody) => newsBody._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [currentId,post]);

    const clear = () => {
        setCurrentId(null);
        setPostData({ author: '', title: '', newsBody: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!currentId) {
            dispatch(createNewsPost(newstData));
        } 
        else {
            dispatch(updateNewsPost(currentId, newstData));
            
        }
        clear();
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
                <TextField name="author" variant="outlined" label="Author" fullWidth value={newstData.author} onChange={(e) => setPostData({ ...newstData, author: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={newstData.title} onChange={(e) => setPostData({ ...newstData, title: e.target.value })} />
                <TextField name="newsBody" variant="outlined" label="NewsBody" fullWidth multiline rows={4} value={newstData.newsBody} onChange={(e) => setPostData({ ...newstData, newsBody: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={newstData.tags} onChange={(e) => setPostData({ ...newstData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...newstData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
    );
};

export default Form;