import React from "react";
import { makeStyles, withStyles } from "@mui/styles";

// // withStyles & makeStyles

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "1200px",
    backgroundColor: "darkGreen",
  },
};

const SideMenu = (props) => {
  const { classes } = props;

  return <div className={classes.sideMenu}></div>;
};

export default withStyles(style)(SideMenu);
