import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import styles from "../styles/Home.module.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function ButtonMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={styles.navbar}>
        <ul className="navbar navbar-nav navbar-light">
          <li className="nav-item">
              <a className="nav-link" href="#home" spy={true} smooth={true}>Home </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#about" spy={true} smooth={true}>About </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#services" spy={true} smooth={true}>Services </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#advantage" spy={true} smooth={true}>Advantages </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#contact" spy={true} smooth={true}>Contact </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#map" spy={true} smooth={true}>Map </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className={styles.header}>

      <a className="navbar-brand w-75 mt-0 p-0 ml-3 mr-auto" href="#">
        Secure Investment
      </a>
      <div className=" mr-auto">
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={styles.word} onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

      </div>

    </div>
  );
}
