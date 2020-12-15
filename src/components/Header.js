import React from "react";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(2),
    marginTop: "1rem",
  },
  title: {
    color: "tomato",
  },

  subtitle: {
    color: "tan",
    marginBottom: "5rem",
  },

  typedContainer: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Hero Image" />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["Hi, my name is Manojlo Ilić"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Software Developer",
            "Web Developer",
            "ReactJS",
            "ASP.NET",
            "MERN Stack",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
