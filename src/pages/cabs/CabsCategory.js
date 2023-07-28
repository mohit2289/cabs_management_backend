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
import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import CabCategoryTable from "../tables/CabCategoryTable";

export default function CabsCategoryPage() {
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
            Add Cab Category 
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
           <GenericInput label={'Vehicle Category Name'} Name={'VC_name'} required/>
          </Grid>
          <Grid item xs={12} md={6}>
          <GenericInput label={'Vehicle Segment By Seat'} required />
          </Grid>
          <Grid item xs={12} md={6}>
          <GenericInput label={'Vehicle Segment By Code'} required />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericCheckbox label={'(Tick if Visible)'} required/>
          </Grid>
          
          <Grid item xs={12} md={3}>
                <GenericSwitch label={'Visible'} required />
              </Grid>
          
        </Grid>
        </Paper>

        <Grid container spacing={4} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
           <CabCategoryTable />
          </Grid>
          </Grid>
        
    </>
  );
}
