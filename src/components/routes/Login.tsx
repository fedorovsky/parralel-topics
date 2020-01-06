import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
        label="Emai"
        variant="outlined"
      />
      <TextField
        className={classes.field}
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained" color="primary" size="large" fullWidth>
        Login
      </Button>
    </form>
  );
};

export default Login;
