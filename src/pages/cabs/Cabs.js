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
import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import CabsTableable from "./CabsTable";

export default function CabsPage() {
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
            Add Cab Details
          </Typography>
        </Box>
      <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <GenericInput label={'Vehicle Model Name'} required />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput label={'Model Year'} type={Number} required />
            </Grid>
              <Grid item xs={12} md={4}>
                <GenericDropdown label={'Vehicle Category Name'} />
              </Grid>

              <Grid item xs={12} md={4}>
                <GenericDropdown label={'Vehicle Segment By Seat'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericDropdown label={'No Of Bags'} />
              </Grid>
              <Grid item xs={12} md={4}>
            <GenericInput label={''} type={'file'} required helperText="Upload Vehicle Image" />
          </Grid>

              <Grid item xs={12} md={12}>
              <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(English Speaking Driver )'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Uniform Driver  )'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(GPS )'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Water Bottles )'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(LCD TV )'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Newspaper )'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Music System )'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericSwitch label={'Visible'} required />
              </Grid>
              </Grid>
              </Grid>
          
       
          

          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }}>
              save
            </Button>
          </Grid>
          
        </Grid>
        </Paper>

        <Grid container spacing={4} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
           <CabsTableable />
          </Grid>
          </Grid>
    </>
  );
}
