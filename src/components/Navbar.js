import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  List,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  LocalLibrary,
} from "@material-ui/icons";
import favicon from "../images/favicon1.png";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
    backgroundColor: "#511",
  },
  favicon: {
    marginLeft: "0.7rem",
    margin: "0.5rem auto",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  ListItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },

  {
    listIcon: <AssignmentInd />,
    listText: "About",
    listPath: "/about",
  },

  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },

  {
    listIcon: <LocalLibrary />,
    listText: "Blog",
    listPath: "/blog",
  },
];
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <Link to="/">
        <img className={classes.avatar} src={favicon} alt="Hero " />
      </Link>
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.ListItem}>
              {lsItem.listIcon}{" "}
            </ListItemIcon>
            <ListItemText
              className={classes.ListItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "tomato" }} />
            </IconButton>

            <Link to="/">
              <img alt="favicon" className={classes.favicon} src={favicon} />
            </Link>

            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
