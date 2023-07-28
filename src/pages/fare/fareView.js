import * as React from 'react';
//import Button from '@mui/material/Button';
import { Box, Button, Paper, Grid } from '@mui/material';
//import driverTable from './driver/draverTable';
import FareTable from './fareTable';


export default function MyApp() {
  return (

    <Grid container spacing={2} sx={{ marginTop:'0x' }}>
       <Grid item xs={12} md={1}>
            <Button variant="contained" fullWidth sx={{ my: 3 }} style={{marginTop:0}}>
              Local
            </Button>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="contained" color="warning" fullWidth sx={{ my: 3 }} style={{marginTop:0}}>
              Oustation
            </Button>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="contained" color="secondary" fullWidth sx={{ my: 3 }} style={{marginTop:0}}>
              Point to Point
            </Button>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="contained" color="success" fullWidth sx={{ my: 3 }} style={{marginTop:0}}>
              Transfer
            </Button>
          </Grid>
          <Grid item xs={12}>
          <FareTable/>
          </Grid>
          </Grid>
    
  );
}