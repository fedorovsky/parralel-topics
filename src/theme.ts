import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createMuiTheme } from '@material-ui/core/styles';

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  overrides: {
    // Header
    MuiToolbar: {
      regular: {
        [breakpoints.up('xs')]: {
          minHeight: 64,
        },
      },
    },
  },
  palette: {},
});

export default theme;
