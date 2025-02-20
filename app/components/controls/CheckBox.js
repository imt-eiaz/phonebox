import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";
import React from "react";

const converToDefEventPara = (name, value) => ({
  target: {
    name,
    value,
  },
});

export default function CheckBox(props) {
  const { name, label, value, onChange } = props;
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(converToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
