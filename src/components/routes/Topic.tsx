import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TopicCard from '../TopicCard';

const StyledGrid = withStyles({
  root: {
    border: '1px solid green',
    height: 'calc(100vh - 64px)',
  },
})(Grid);

const Topic = () => {
  return (
    <StyledGrid container direction="column" alignItems="stretch">
      <TopicCard />
      <TopicCard />
    </StyledGrid>
  );
};

export default Topic;
