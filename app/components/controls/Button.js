import React from "react";
import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles1 = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  label: {
    textTransform: "none",
  },
}));

const useStylesMe = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    label: {
      textTransform: "none",
    },
  },
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStylesMe();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "success"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, text: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
