import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    field: {
      marginBottom: theme.spacing(2),
    },
  }),
);

const Login = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.field}
        fullWidth
        label="Label"
        variant="outlined"
      />
      <TextField
        className={classes.field}
        fullWidth
        label="Label"
        variant="outlined"
      />
    </form>
  );
};

export default Login;
