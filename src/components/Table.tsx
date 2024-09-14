import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { TableProps } from "../types";

const Table = ({ rows, columns, height }: TableProps) => {
  return (
    <Paper sx={{ height: height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default Table;
