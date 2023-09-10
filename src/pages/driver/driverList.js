import * as React from 'react';
import { Grid } from '@mui/material';
import DriverTable from './driverTable';


export default function MyApp() {
  return (
    <Grid container spacing={4} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
          <DriverTable/>
          </Grid>
          </Grid>
    
  );
}