import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../components/SideMenu";
import MainBuyContent from "../components/MainBuyContent";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default () => {
  const classes = useStyles();
  let match = useRouteMatch();


  return (
    <div className={classes.root}>
      <SideMenu />
      <Switch>
        <Route path={`${match.path}/:category`}>
          <MainBuyContent />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};
