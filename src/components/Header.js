import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default () => {
  const history = useHistory();

  function goToBuy() {
    history.push("/buy");
  }

  function goToRegister() {
    history.push("/register");
  }

  function goToHome() {
    history.push("/");
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <Button onClick={goToHome} color="inherit">
              Pammi
            </Button>
          </Typography>
          <Button onClick={goToBuy} color="inherit">
            Comprar
          </Button>
          <Button onClick={goToRegister} color="inherit">
            Registrar
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
