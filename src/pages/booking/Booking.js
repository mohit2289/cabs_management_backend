import * as React from 'react';
//import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {Grid, Box, Paper } from '@mui/material';
import BookingTable from './bookingTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MyApp() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
   <Grid container spacing={2} sx={{ marginTop:'5px' }}>
  
   <Grid item xs={3}>
    <Item><div>Local Booking</div>
    <div>5</div>
    </Item>
   
  </Grid>
  
  <Grid item xs={3}>
    
  <Item><div>Outstation Booking</div>
    <div>5</div>
    </Item>
    
  </Grid>
  <Grid item xs={3}>
  <Item><div>Point to Point Booking</div>
    <div>5</div>
    </Item>
  </Grid>
  <Grid item xs={3}>
  <Item><div>Transfer Booking</div>
    <div>5</div>
    </Item>
  </Grid>
   </Grid>
   </Box>
    <Grid container spacing={0} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
          <BookingTable/>
          </Grid>
          </Grid>
    </>
  );
}