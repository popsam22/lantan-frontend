import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const Table = ({ rows, columns }) => {
  return (
    <Paper sx={{ height: 600, width: "100%" }}>
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
