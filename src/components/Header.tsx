import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/reducer';
import { isAuthorizedSelector, logout } from 'modules/auth';
import AppContext from '../AppContext';
import SideNavigation from './SideNavigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Header: React.FC<PropsFromRedux> = ({ isAuthorized, logout }) => {
  const classes = useStyles();
  const [isOpenDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [isOpenUserMenu, setUserMenuState] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { pageTitle } = React.useContext(AppContext);

  const handleLogout = async () => {
    await logout();
    setUserMenuState(false);
  };

  const handleOpenUserMeu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setUserMenuState(true);
  };

  return (
    <div className={classes.root}>
      <SideNavigation
        isOpen={isOpenDrawer}
        onClose={() => setOpenDrawer(false)}
      />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => setOpenDrawer(true)}
          >
            {pageTitle}
          </Typography>
          {isAuthorized ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMeu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isOpenUserMenu}
                onClose={() => setUserMenuState(false)}
              >
                <MenuItem onClick={() => setUserMenuState(false)}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => setUserMenuState(false)}>
                  My account
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const connector = connect(
  (state: RootState) => ({
    isAuthorized: isAuthorizedSelector(state),
  }),
  {
    logout,
  },
);

export default connector(Header);
