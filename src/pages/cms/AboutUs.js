import React from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
// styles
import useStyles from "./styles";

// components
//import PageTitle from "../../components/PageTitle/PageTitle";
//import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
//import GenericDropdown from '../../common-components/form-elements/genericDropdown';
//import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
//import GenericSwitch from "../../common-components/form-elements/genericSwitch";
//import PaymentTable from "./PaymentTable";
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function AboutUs() {
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
            <Grid item xs={12} md={12}>
            <GenericInput label={'TItle'} required />
            </Grid>
            <Grid item xs={12} md={12}>
            <GenericInput label={'Short Description'} required />
            </Grid>
              <Grid item xs={12} md={12}>
                <GenericInput label={'Meta Description'} />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextareaAutosize />
              </Grid>
              
                
          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }}>
              Search
            </Button>
          </Grid>
          
        </Grid>
        </Paper>

       
    </>
  );
}
