import { Alert, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}));

export default function Notification(props) {
  const { notify, setNotify } = props;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (handleClose === "clickaway") {
      return;
    }
    setNotify({
      ...notify,
      isOpen: false,
    });
  };
  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={notify.type}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
