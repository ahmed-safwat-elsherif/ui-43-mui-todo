import React from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import AppDataGrid from "../shared/AppDataGrid";

import Chip from "@mui/material/Chip";

/** @type {import("@mui/x-data-grid").GridColDef<unknown>[]} */
const columns = [
  { field: "id", headerName: "ID number" },
  { field: "title", headerName: "Title" },
  {
    field: "completed",
    headerName: "Is done ?",
    renderCell: ({ value }) =>
      value ? (
        <Chip label="Completed" color="success" variant="outlined" />
      ) : (
        <Chip label="In progress" color="warning" variant="outlined" />
      ),
  },
];

const TodosTable = (props) => {
  const { todos = [] } = props;

  return <AppDataGrid rows={todos} columns={columns} />;
};

export default TodosTable;
