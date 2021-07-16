import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from '../components/drower';
import Movebar from '../components/movebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <TemporaryDrawer></TemporaryDrawer>

          <Link to={`/rooms`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" className={classes.title}>
              SakuraClass
          </Typography>
          </Link>
          <Movebar></Movebar>
          <Link to={`/login`} style={{ textDecoration: 'none', color: "inherit" }}>
            <Button color="inherit">signin</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
