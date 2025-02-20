import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;
  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup name={name} value={value} onChange={onChange} row>
          {items.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio color="primary" />}
              label={item.title}
            />
          ))}
        </MuiRadioGroup>
      </FormControl>
    </>
  );
}
