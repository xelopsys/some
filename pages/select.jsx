import React, { useState } from "react";
// import styles from "../styles/Home.module.css"
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from "@material-ui/core";


const useStyle = makeStyles(theme => ({
    formControl: {
        minWidth: 300
    }
}));

export default function SelectItem() {
    const classes = useStyle();
    const [value, setValue] = useState("");
 
    const handleChange = e => setValue(e.target.value)
    const [valu, setValu] = useState("");

    const handlChange = e => setValu(e.target.valu)

  return (
    <div className="">
      <h1>Hello from Xelopsys</h1>
<FormControl className={classes.formControl}>
    <InputLabel>Number</InputLabel>
      <Select onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
    <InputLabel>Number</InputLabel>
      <Select onChange={handlChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
      </FormControl>

  <p>You selected: {value + valu}</p>
    </div>
  );
}
