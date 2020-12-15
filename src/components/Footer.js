import React from "react";
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import MailOutline from "@material-ui/icons/MailOutline";
const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 12 }}
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/manojlo-ili%C4%87-141261192/"
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 12 }}
        icon={<GitHub />}
        href="https://github.com/milic12"
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 12 }}
        icon={<MailOutline />}
        href="mailto: milic00@fesb.hr"
      />
    </BottomNavigation>
  );
};

export default Footer;
