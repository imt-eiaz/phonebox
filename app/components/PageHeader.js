import { Theme } from "@ant-design/cssinjs";
import { Margin, Opacity, Padding } from "@mui/icons-material";
import { Card, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrouColor: "#fdfdff",
    borderRadius: "16px",
  },
  pageHeader: {
    padding: theme.spacing(6),
    display: "flex",
    marginButtom: theme.spacing(4),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      Opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>

        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
