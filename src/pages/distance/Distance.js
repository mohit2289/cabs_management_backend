import React from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
//import GenericDropdown from '../../common-components/form-elements/genericDropdown';
import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
//import MUIDataTable from "mui-datatables";
import DistanceTable from "../distance/DistanceTable";
import GenericDropdown from "../../common-components/form-elements/genericDropdown";

export default function DistancePage() {
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
            Add Distance 
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
           <GenericDropdown label={'From City'} Name={'Fcity_name'} required/>
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericDropdown label={'To City'} required />
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericInput label={'Distance'} required />
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }}>
              Add Distance
            </Button>
          </Grid>
          
        </Grid>
        </Paper>

        <Grid container spacing={4} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
           <DistanceTable />
          </Grid>
          </Grid>
        
    </>
  );
}
