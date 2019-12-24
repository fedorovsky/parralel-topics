import * as React from 'react';
import {
  // withStyles,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

// const StyledGrid = withStyles({
//   root: {
//     border: '1px solid green',
//     height: 'calc(var(--vh, 1vh) * 100 - 64px)',
//   },
// })(Grid);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid green',
      height: 'calc(var(--vh, 1vh) * 100 - 64px)',
    },
    item: {
      border: '1px solid red',
      height: '50%',
      overflow: 'auto',
    },
  }),
);

const Topic = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        necessitatibus animi illo beatae saepe. Laborum voluptates aspernatur
        architecto, consectetur commodi vel omnis inventore odio maxime.
        Corrupti, aliquam explicabo esse dicta accusantium ducimus non,
        perferendis aperiam sint, quis architecto voluptates impedit quasi
        eligendi labore ea repudiandae incidunt vero doloribus cum quia?
        Cupiditate nulla, sapiente incidunt pariatur sequi esse veniam ducimus
        quidem quo, perferendis saepe animi vero reiciendis alias atque optio
        nihil molestias omnis consectetur voluptates. Fugiat mollitia amet error
        dolor, pariatur officia molestiae ipsum, voluptate veniam maxime cumque
        nostrum quidem voluptatem culpa neque ducimus quaerat asperiores saepe
        dolorum quos nemo! Voluptatibus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquam necessitatibus animi illo beatae saepe.
        Laborum voluptates aspernatur architecto, consectetur commodi vel omnis
        inventore odio maxime. Corrupti, aliquam explicabo esse dicta
        accusantium ducimus non, perferendis aperiam sint, quis architecto
        voluptates impedit quasi eligendi labore ea repudiandae incidunt vero
        doloribus cum quia? Cupiditate nulla, sapiente incidunt pariatur sequi
        esse veniam ducimus quidem quo, perferendis saepe animi vero reiciendis
        alias atque optio nihil molestias omnis consectetur voluptates. Fugiat
        mollitia amet error dolor, pariatur officia molestiae ipsum, voluptate
        veniam maxime cumque nostrum quidem voluptatem culpa neque ducimus
        quaerat asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus
        animi illo beatae saepe. Laborum voluptates aspernatur architecto,
        consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
        explicabo esse dicta accusantium ducimus non, perferendis aperiam sint,
        quis architecto voluptates impedit quasi eligendi labore ea repudiandae
        incidunt vero doloribus cum quia? Cupiditate nulla, sapiente incidunt
        pariatur sequi esse veniam ducimus quidem quo, perferendis saepe animi
        vero reiciendis alias atque optio nihil molestias omnis consectetur
        voluptates. Fugiat mollitia amet error dolor, pariatur officia molestiae
        ipsum, voluptate veniam maxime cumque nostrum quidem voluptatem culpa
        neque ducimus quaerat asperiores saepe dolorum quos nemo! Voluptatibus.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        necessitatibus animi illo beatae saepe. Laborum voluptates aspernatur
        architecto, consectetur commodi vel omnis inventore odio maxime.
        Corrupti, aliquam explicabo esse dicta accusantium ducimus non,
        perferendis aperiam sint, quis architecto voluptates impedit quasi
        eligendi labore ea repudiandae incidunt vero doloribus cum quia?
        Cupiditate nulla, sapiente incidunt pariatur sequi esse veniam ducimus
        quidem quo, perferendis saepe animi vero reiciendis alias atque optio
        nihil molestias omnis consectetur voluptates. Fugiat mollitia amet error
        dolor, pariatur officia molestiae ipsum, voluptate veniam maxime cumque
        nostrum quidem voluptatem culpa neque ducimus quaerat asperiores saepe
        dolorum quos nemo! Voluptatibus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquam necessitatibus animi illo beatae saepe.
        Laborum voluptates aspernatur architecto, consectetur commodi vel omnis
        inventore odio maxime. Corrupti, aliquam explicabo esse dicta
        accusantium ducimus non, perferendis aperiam sint, quis architecto
        voluptates impedit quasi eligendi labore ea repudiandae incidunt vero
        doloribus cum quia? Cupiditate nulla, sapiente incidunt pariatur sequi
        esse veniam ducimus quidem quo, perferendis saepe animi vero reiciendis
        alias atque optio nihil molestias omnis consectetur voluptates. Fugiat
        mollitia amet error dolor, pariatur officia molestiae ipsum, voluptate
        veniam maxime cumque nostrum quidem voluptatem culpa neque ducimus
        quaerat asperiores saepe dolorum quos nemo! Voluptatibus.
      </div>
      <div className={classes.item}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        necessitatibus animi illo beatae saepe. Laborum voluptates aspernatur
        architecto, consectetur commodi vel omnis inventore odio maxime.
        Corrupti, aliquam explicabo esse dicta accusantium ducimus non,
        perferendis aperiam sint, quis architecto voluptates impedit quasi
        eligendi labore ea repudiandae incidunt vero doloribus cum quia?
        Cupiditate nulla, sapiente incidunt pariatur sequi esse veniam ducimus
        quidem quo, perferendis saepe animi vero reiciendis alias atque optio
        nihil molestias omnis consectetur voluptates. Fugiat mollitia amet error
        dolor, pariatur officia molestiae ipsum, voluptate veniam maxime cumque
        nostrum quidem voluptatem culpa neque ducimus quaerat asperiores saepe
        dolorum quos nemo! Voluptatibus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquam necessitatibus animi illo beatae saepe.
        Laborum voluptates aspernatur architecto, consectetur commodi vel omnis
        inventore odio maxime. Corrupti, aliquam explicabo esse dicta
        accusantium ducimus non, perferendis aperiam sint, quis architecto
        voluptates impedit quasi eligendi labore ea repudiandae incidunt vero
        doloribus cum quia? Cupiditate nulla, sapiente incidunt pariatur sequi
        esse veniam ducimus quidem quo, perferendis saepe animi vero reiciendis
        alias atque optio nihil molestias omnis consectetur voluptates. Fugiat
        mollitia amet error dolor, pariatur officia molestiae ipsum, voluptate
        veniam maxime cumque nostrum quidem voluptatem culpa neque ducimus
        quaerat asperiores saepe dolorum quos nemo! Voluptatibus. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus
        animi illo beatae saepe. Laborum voluptates aspernatur architecto,
        consectetur commodi vel omnis inventore odio maxime. Corrupti, aliquam
        explicabo esse dicta accusantium ducimus non, perferendis aperiam sint,
        quis architecto voluptates impedit quasi eligendi labore ea repudiandae
        incidunt vero doloribus cum quia? Cupiditate nulla, sapiente incidunt
        pariatur sequi esse veniam ducimus quidem quo, perferendis saepe animi
        vero reiciendis alias atque optio nihil molestias omnis consectetur
        voluptates. Fugiat mollitia amet error dolor, pariatur officia molestiae
        ipsum, voluptate veniam maxime cumque nostrum quidem voluptatem culpa
        neque ducimus quaerat asperiores saepe dolorum quos nemo! Voluptatibus.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        necessitatibus animi illo beatae saepe. Laborum voluptates aspernatur
        architecto, consectetur commodi vel omnis inventore odio maxime.
        Corrupti, aliquam explicabo esse dicta accusantium ducimus non,
        perferendis aperiam sint, quis architecto voluptates impedit quasi
        eligendi labore ea repudiandae incidunt vero doloribus cum quia?
        Cupiditate nulla, sapiente incidunt pariatur sequi esse veniam ducimus
        quidem quo, perferendis saepe animi vero reiciendis alias atque optio
        nihil molestias omnis consectetur voluptates. Fugiat mollitia amet error
        dolor, pariatur officia molestiae ipsum, voluptate veniam maxime cumque
        nostrum quidem voluptatem culpa neque ducimus quaerat asperiores saepe
        dolorum quos nemo! Voluptatibus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquam necessitatibus animi illo beatae saepe.
        Laborum voluptates aspernatur architecto, consectetur commodi vel omnis
        inventore odio maxime. Corrupti, aliquam explicabo esse dicta
        accusantium ducimus non, perferendis aperiam sint, quis architecto
        voluptates impedit quasi eligendi labore ea repudiandae incidunt vero
        doloribus cum quia? Cupiditate nulla, sapiente incidunt pariatur sequi
        esse veniam ducimus quidem quo, perferendis saepe animi vero reiciendis
        alias atque optio nihil molestias omnis consectetur voluptates. Fugiat
        mollitia amet error dolor, pariatur officia molestiae ipsum, voluptate
        veniam maxime cumque nostrum quidem voluptatem culpa neque ducimus
        quaerat asperiores saepe dolorum quos nemo! Voluptatibus.
      </div>
    </div>
  );
};

export default Topic;
