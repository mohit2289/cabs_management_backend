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
import { grey } from "@material-ui/core/colors";
//import GenericDatePicker from "../../common-components/form-elements/genericDatePicker";

export default function DriverPage() {
  var classes = useStyles();

  const handlerChange = (evt) => {
    console.log(evt.target.value, 'mohit');
  };

  return (
    <>
      {/* <PageTitle title="Driver" /> */}
      <Paper sx={{ padding: '30px' }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Add Driver Details
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
           <GenericInput label={'Driver Name'} Name={'Driver_name'} />
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericInput label={'Contact no'} required />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput label={'Email'} required />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <GenericInput label={'Pincode'} required />
              </Grid>
              <Grid item xs={12} md={6}>
                <GenericDropdown label={'State'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <GenericDropdown label={'City'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <GenericInput label={'Locality'} required />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
          <GenericInput label={'Address'} required multiline rows={3} />
          </Grid>
       
          <Grid item xs={12} md={6}>
            <GenericInput label={'Aadhar No'} required />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required helperText="Upload Aadhar" />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={'PAN No'} required />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required helperText="Upload Pancard" />
          </Grid>

          <Grid item xs={12} md={6}>
                <GenericDropdown label={'Select Vehicle Category'} />
              </Grid>

              <Grid item xs={12} md={6}>
                <GenericDropdown label={'Select Vehicle Name'} />
              </Grid>

          <Grid item xs={12} md={6}>
            <GenericInput label={'DL No'} required />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={'DL Expiry'} type={'date'} required />
          </Grid>

          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required  helperText="Upload DL"/>
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required  helperText="Upload Police Verification"/>
            
          </Grid>

          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required  helperText="Driver Image Upload"/>
            
          </Grid>
          <Grid item xs={12} md={3} >
          <Grid container spacing={1}>
              <Grid item xs={12} md={8} style={{border: '1px solid black', height:'150px'}}>


              </Grid>
              </Grid>

          </Grid>

          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }}>
              Add Driver
            </Button>
          </Grid>
          
        </Grid>
        </Paper>
    </>
  );
}
