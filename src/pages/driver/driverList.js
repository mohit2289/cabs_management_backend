import * as React from 'react';
//import Button from '@mui/material/Button';
import { Box, Button, Paper, Grid } from '@mui/material';
//import driverTable from './driver/draverTable';
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