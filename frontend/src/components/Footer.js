import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SearchBox from "./SearchBox";
import logo from "../logo.png";
import { logout } from "../redux/slices/userSlice";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
    alignItems: "center",
  },
  grow: {
    // flexGrow: 1,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
  },
  menuItem: {
    minWidth: 180,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  padding: {
    padding: "5px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link onClick={() => {window.location = "https://github.com/KingIndra"}} className={classes.link}>Github</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;