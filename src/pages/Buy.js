import React from "react";
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

  return (
    <div className={classes.root}>
      <SideMenu />
      <MainBuyContent />
    </div>
  );
};
