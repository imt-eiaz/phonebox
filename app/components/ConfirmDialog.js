import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Controls from "./controls/Controls";
import { makeStyles } from "@mui/styles";
import { NotListedLocation } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={confirmDialog.isOpen}
      classes={{ paper: classes.dialog }}
      sx={{
        pb: 50,
        position: "absolute",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <DialogTitle>
        <IconButton disableRipple>
          <NotListedLocation sx={{ color: "darkOrange", fontSize: 80 }} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Controls.Button
          text="No"
          color="primary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Controls.Button
          text="Yes"
          color="error"
          onClick={confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
}
