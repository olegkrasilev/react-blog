import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'src/redux/action/posts';
import { RenderPagination } from 'src/components/pagination';
import { selectAllUsersPosts } from 'src/redux/selector';

export const AllPosts: React.FC = () => {
  const dispatch = useDispatch();
  const allUsersPosts = useSelector(selectAllUsersPosts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  useEffect(() => {}, [allUsersPosts]);

  const renderAllUsersPosts = allUsersPosts.map(item => {
    const { firstName, lastName, post, postCreationTime, title, postID } = item;

    return (
      <Grid item key={postID} xs={12}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {title} by {firstName}
                {lastName}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                Created at <time>{postCreationTime}</time>
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {post}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Comment
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return <RenderPagination incomingData={allUsersPosts} renderData={renderAllUsersPosts} />;
};
