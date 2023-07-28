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
//import GenericDatePicker from "../../common-components/form-elements/genericDatePicker";
//import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
import GenericSwitch from "../../common-components/form-elements/genericSwitch";

export default function AddAirBusRail() {
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
            Add Air/Bus/Rail Stand Details
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <GenericDropdown label={'Select State'} required/>
            </Grid>
          <Grid item xs={12} md={4}>
           <GenericInput label={'City Name'} Name={'City_name'} required/>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericDropdown label={'Select Type'} required/>
            </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput label={'Airport / Railway / Bus Stand *'} required />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput label={'Sort Order'} required />
          </Grid>
              <Grid item xs={12} md={3}>
                <GenericSwitch label={'Visible'} required />
              </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }}>
              Add Air / Bus / Rail
            </Button>
          </Grid>
          
        </Grid>
        </Paper>
    </>
  );
}
