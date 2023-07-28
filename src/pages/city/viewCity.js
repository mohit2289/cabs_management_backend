import * as React from 'react';
//import Button from '@mui/material/Button';
import {Grid } from '@mui/material';


import CityTable from './cityTable';


export default function MyApp() {
  return (
    <Grid container spacing={0} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
          <CityTable/>
          </Grid>
          </Grid>
    
  );
}