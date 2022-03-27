import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


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

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="static">
          <Container>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                 <Button color="black" style={{fontFamily: "fantasy", fontSize: 25 }} component={ Link } to="/">Home</Button>
                </Typography>
                <Button style={{fontFamily: "fantasy", fontSize: 25}} color="black" component={ Link } to="/login">Login</Button>
                <Button style={{fontFamily: "fantasy", fontSize: 25}} color="black" component={ Link } to="/dragonPage">Dragons</Button>
                <Button style={{fontFamily: "fantasy", fontSize: 25}} color="black" component={ Link } to="/knightsPage">Knights</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;