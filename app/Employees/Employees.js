"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm.js";
import PageHeader from "../components/PageHeader.js";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../components/controls/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../components/controls/Controls";
// import TablePagination from "@mui/material/TablePagination";
import { Close, Edit, Search } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import Popup from "../components/Popup";
import Notification from "../components/Notification";
import ConfirmDialog from "../components/ConfirmDialog";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    // margin: theme.spacing(5),
    // padding: theme.spacing(3),
  },
  "& .MuiTableRow-root": {
    borderRadius: "1px",
    color: "red",
    backgroundColor: "red",
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    left: "15%",
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function Employees() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);

  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "You have update the record successfully ",
      type: "success",
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    employeeService.deleteEmployee(id);
    setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "You have deleted the record successfully ",
      type: "error",
    });
  };

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="form design with validation"
        icon={<PeopleAltIcon fontSize="large" />}
        sx={{ m: "50px", mb: "20px", border: 1, borderColor: "#000" }}
      />
      <Paper
        className={classes.pageContent}
        sx={{
          m: "50px",
          mb: "20px",
          mt: "10px",
          borderColor: "#000",
        }}
      ></Paper>

      <Paper
        sx={{
          m: "50px",
          mb: "20px",
          border: 1,
          border: 1,
          borderColor: "#000",
        }}
      >
        <Toolbar>
          <Controls.Input
            sx={{ mt: "20px" }}
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add new"
            varient="outlined"
            startIcon={<Add />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  mb: 20,
                  "& .MuiTableRow-root": {
                    borderRadius: "1px",
                    color: "red",
                  },
                }}
              >
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    {" "}
                    <Edit fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="danger"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are you sure to delete this record ? ",
                        subTitle: "You can't undo this operation.",
                        onConfirm: () => {
                          onDelete(item.id);
                        },
                      });
                    }}
                  >
                    {" "}
                    <Close fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
