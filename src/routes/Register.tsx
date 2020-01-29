import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { connect, ConnectedProps } from 'react-redux';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { RootState } from 'redux/reducer';
import { register, getError } from 'modules/auth';

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

const Register: React.FC<PropsFromRedux> = ({ register, error }) => {
  const classes = useStyles();
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleRegister = () => {
    register({
      name: name,
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
          value={name}
          onChange={e => setName(e.target.value)}
          label="Name"
          variant="outlined"
          type="text"
        />
        <TextField
          className={classes.field}
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          type="text"
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
          onClick={handleRegister}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

const connector = connect(
  (state: RootState) => (state: RootState) => ({
    error: getError(state),
  }),
  {
    register,
  },
);

export default connector(Register);
