import { makeStyles } from "@mui/styles";
import React from "react";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.6),
  },

  secondary: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function ActionButton(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      color="red"
      className={`${classes.root} ${classes[color]}`}
      onClick={onClick}
      sx={{ color: "red" }}
    >
      {children}
    </Button>
  );
}
