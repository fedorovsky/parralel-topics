import * as React from 'react';
import {
  // withStyles,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
      border: '1px solid green',
      height: 'calc(var(--vh, 1vh) * 100 - 64px)',
      display: 'flex',
      flexDirection: 'column',
    },
    item: {
      marginBottom: 10,
      border: '1px solid red',
      height: '50%',
      overflow: 'auto',
    },
  }),
);

const Topic = () => {
  const classes = useStyles();

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);

  const refsRef = React.useRef([ref1, ref2]);

  useSyncScroll(refsRef, { vertical: true, horizontal: false });

  return (
    <div className={classes.root}>
      <div className={classes.item} ref={ref1}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          necessitatibus animi illo beatae saepe. Laborum voluptates aspernatur
          architecto, consectetur commodi vel omnis inventore odio maxime.
          Corrupti, aliquam explicabo esse dicta accusantium ducimus non,
          perferendis aperiam sint, quis architecto voluptates impedit quasi
          eligendi labore ea repudiandae incidunt vero doloribus cum quia?
          Cupiditate nulla, sapiente incidunt pariatur sequi esse veniam ducimus
          quidem quo, perferendis saepe animi vero reiciendis alias atque optio
          nihil molestias omnis consectetur voluptates. Fugiat mollitia amet
          error dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus.
        </Typography>
      </div>
      <div className={classes.item} ref={ref2}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          necessitatibus animi illo beatae saepe. Laborum voluptates aspernatur
          architecto, consectetur commodi vel omnis inventore odio maxime.
          Corrupti, aliquam explicabo esse dicta accusantium ducimus non,
          perferendis aperiam sint, quis architecto voluptates impedit quasi
          eligendi labore ea repudiandae incidunt vero doloribus cum quia?
          Cupiditate nulla, sapiente incidunt pariatur sequi esse veniam ducimus
          quidem quo, perferendis saepe animi vero reiciendis alias atque optio
          nihil molestias omnis consectetur voluptates. Fugiat mollitia amet
          error dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam necessitatibus animi
          illo beatae saepe. Laborum voluptates aspernatur architecto,
          consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
          explicabo esse dicta accusantium ducimus non, perferendis aperiam
          sint, quis architecto voluptates impedit quasi eligendi labore ea
          repudiandae incidunt vero doloribus cum quia? Cupiditate nulla,
          sapiente incidunt pariatur sequi esse veniam ducimus quidem quo,
          perferendis saepe animi vero reiciendis alias atque optio nihil
          molestias omnis consectetur voluptates. Fugiat mollitia amet error
          dolor, pariatur officia molestiae ipsum, voluptate veniam maxime
          cumque nostrum quidem voluptatem culpa neque ducimus quaerat
          asperiores saepe dolorum quos nemo! Voluptatibus.
        </Typography>
      </div>
    </div>
  );
};

export default Topic;
