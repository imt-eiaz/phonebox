import { AppBar, Toolbar, InputBase, IconButton, Badge } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles, withStyles } from "@mui/styles";

import SearchIcon from "@mui/icons-material/Search";

import Grid from "@mui/material/Grid2";
import { MarginRounded } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  Toolbar: {
    backgroundColor: "green",
    transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    // padding: "0px 8px",
    padding: `0px ${theme.spacing(1)}`,
    fontSize: "0.8rem",
    borderRadius: "16px",
    "&:hover": {
      backgroundColor: "yellow",
    },
    "& .MuiSvgIcon-root": {
      mr: theme.spacing(2),
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar
        className={classes.Toolbar}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          container
          item
          style={{
            border: "1px solid #000",
            borderRadius: "16px",
          }}
          // size={{ xs: 12, sm: 6, md: 3 }}
          // spacing={3}
        >
          <InputBase
            placeholder="Search here"
            className={classes.searchInput}
            startAdornment={<SearchIcon fontSize="small" />}
          />
        </Grid>
        <Grid item sm></Grid>
        <Grid
          item
          // style={{ border: "1px solid #000" }}
          // size={{ xs: 12, sm: 6, md: 3 }}
          // spacing={3}
        >
          <IconButton>
            <Badge badgeContent={6} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <ChatBubbleIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <PowerSettingsNewIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
