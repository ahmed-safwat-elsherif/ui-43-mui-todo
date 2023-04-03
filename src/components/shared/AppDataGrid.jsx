import React, { useMemo } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const commonColumnConfig = {
  minWidth: 200,
};

const AppDataGrid = (props) => {
  const { columns, rows } = props;

  const computedColumns = useMemo(() =>
    columns.map((column) => ({ ...commonColumnConfig, ...column }))
  );

  return (
    <Box>
      <DataGrid
        autoHeight
        columns={computedColumns}
        rows={rows}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        disableRowSelectionOnClick
        // pageSizeOptions={[5]}
      />
    </Box>
  );
};

export default AppDataGrid;
