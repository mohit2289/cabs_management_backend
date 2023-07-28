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
import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import GenericRadio from "../../common-components/form-elements/genericRadio";
import FareOutstation from "./fareOutstation";
import FareLocal from "./fareLocal";
import FarePoint from "./farePoint";

export default function FarePage() {
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
            Add Fare Details
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
          <Grid container spacing={1}>
        
              <Grid item xs={12} md={12}>
                <GenericRadio value={'value'}  name={'TripType'}/>
              </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericDropdown label={'City '} required />
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericDropdown label={'Destination City  '} required />
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericDropdown label={'Vehicle Model '} required />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericDropdown label={'Category Name'} required />
          </Grid>
          <Grid item xs={12} md={12}>
           <FareLocal/>
          </Grid>

          <Grid item xs={12} md={12}>
            <FareOutstation/>
          </Grid>
          <Grid item xs={12} md={12}>
            <FarePoint/>
          </Grid>
          <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
       
          <Grid item xs={12} md={6}>
            <GenericInput type={'date'} label={'Start Date'} value={'30-07-2023'}  />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput type={'date'} label={'End Date'}  value={'30-07-2023'}/>
          </Grid>
          </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
       
          <Grid item xs={12} md={6}>
            <GenericInput type={'time'} label={'Night Charges Start Time'} value={'10:00'}  />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput type={'time'} label={'Night Charges End Time'}  value={'06:00'}/>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
                <GenericSwitch label={'Active'} required />
              </Grid>

          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }} style={{marginTop:0}}>
              Add Fare
            </Button>
          </Grid>
          
        </Grid>
        </Paper>
    </>
  );
}
