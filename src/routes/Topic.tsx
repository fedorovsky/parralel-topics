import * as React from 'react';
import {
  // withStyles,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useSyncScroll from 'react-use-sync-scroll';

// const StyledGrid = withStyles({
//   root: {
//     border: '1px solid green',
//     height: 'calc(var(--vh, 1vh) * 100 - 64px)',
//   },
// })(Grid);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // 64px = Header height
      // var(--vh, 1vh) = height 1vh
      // border: '1px solid green',
      height: 'calc(var(--vh, 1vh) * 100 - 64px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    item: {
      height: '49%',
      overflow: 'auto',
    },
  }),
);

interface RouterParams {
  themeId: string;
  topicId: string;
}

const Topic: React.FC<RouteComponentProps<RouterParams>> = props => {
  const classes = useStyles();

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);

  const refsRef = React.useRef([ref1, ref2]);

  useSyncScroll(refsRef, { vertical: true, horizontal: false });

  console.log('themeId', props.match.params.themeId);
  console.log('topicId', props.match.params.topicId);

  return (
    <div className={classes.root}>
      <Card className={classes.item} ref={ref1} elevation={2}>
        <CardContent>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.item} ref={ref2} elevation={2}>
        <CardContent>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus animi illo beatae saepe.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Topic;
