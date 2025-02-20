import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MyDatePicker(props) {
  const { name, label, value, onChange } = props;

  const converToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disableToolbar
        varient="inline"
        inputVarient="outlined"
        label={label}
        formate="MMM/dd/yyyy"
        name={name}
        // value={value}
        onChange={(date) => onChange(converToDefEventPara(name, date))}
      />
    </LocalizationProvider>
  );
}
