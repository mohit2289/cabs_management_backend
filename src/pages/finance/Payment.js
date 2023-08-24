import React from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
import GenericDropdown from '../../common-components/form-elements/genericDropdown';
//import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
//import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import PaymentTable from "./PaymentTable";

export default function PaymentPage() {
  var classes = useStyles();

  const handlerChange = (evt) => {
    console.log(evt.target.value, 'mohit');
  };

  return (
    <>
      {/* <PageTitle title="Driver" /> */}
      <Paper sx={{ padding: '20px' }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Search Payment Details
          </Typography>
        </Box>
      <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
            <GenericDropdown label={'Customer Type'} required />
            </Grid>
            <Grid item xs={12} md={4}>
            <GenericDropdown label={'Customer Name'} required />
            </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput label={'Booking ID'} />
              </Grid>

              <Grid item xs={12} md={4}>
                <GenericDropdown label={'Payment Status'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput type={Date} label={'From Date'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput type={Date} label={'To Date'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput type={Date} label={'Invoice No'} />
              </Grid>
                
          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }}>
              Search
            </Button>
          </Grid>
          
        </Grid>
        </Paper>

        <Grid container spacing={4} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
           <PaymentTable />
          </Grid>
          </Grid>
    </>
  );
}
