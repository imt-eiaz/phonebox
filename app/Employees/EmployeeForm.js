import Grid from "@mui/material/Grid2";

import React, { useEffect, useState } from "react";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";
import * as employeeService from "../../services/employeeService";
// import { FormControl } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  gender: "male",
  city: "",
  departmentId: "",
  hiredDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return;
    Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {

    addOrEdit(values, resetForm);
    // }
  };

  useEffect(() => {
    if (recordForEdit !== null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item size={{ xs: 6 }}>
          <Controls.Input
            name="fullName"
            label="Full Names"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item size={{ xs: 6 }}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Controls.RadioGroup
              row
              name="gender"
              // label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />
          </FormControl>
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />

          <Controls.DatePicker
            name="hiredDate"
            label="Hire Date"
            value={values.hiredDate}
            onChange={handleInputChange}
          />

          <Controls.CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{ textTransform: "capitalize" }}
          >
            <Controls.Button
              type="submit"
              text="Submit"
              sx={{ textTransform: "capitalize", fontSize: "h6.fontSize" }}
            />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}
              sx={{ textTransform: "capitalize", fontSize: "h6.fontSize" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Form>
  );
}
