import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import { RootState } from 'redux/reducer';
import { login, getError } from 'modules/auth';

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

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login: React.FC<PropsFromRedux> = ({ login, error }) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    });
  };

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.field}
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Emai"
          variant="outlined"
        />
        <TextField
          className={classes.field}
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

const connector = connect(
  (state: RootState) => ({
    error: getError(state),
  }),
  {
    login,
  },
);

export default connector(Login);
