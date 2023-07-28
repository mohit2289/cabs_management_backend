import LinearProgress from '@mui/material/LinearProgress';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import React from 'react';
import { Paper } from '@mui/material';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const GenericDataGrid = (props) => {
  const { rows, columns } = props;

  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={50}
        slots={{
          toolbar: CustomToolbar,
          // pagination:Pagination,
          loadingOverlay: LinearProgress
        }}
        loading={!(rows.length === 0)}
        // pagination
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 1 } }
        }}
        rowSelection={true}
        pageSizeOptions={[5, 25, 50, 100, 200]}
        checkboxSelection
        // disableRowSelectionOnClick
        {...props}
      />
    </Paper>
  );
};
export default GenericDataGrid;
