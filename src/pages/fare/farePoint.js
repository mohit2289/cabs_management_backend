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
//import { grey } from "@material-ui/core/colors";
//import GenericDatePicker from "../../common-components/form-elements/genericDatePicker";
import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import GenericRadio from "../../common-components/form-elements/genericRadio";

export default function FarePoint() {
  var classes = useStyles();

  const handlerChange = (evt) => {
    console.log(evt.target.value, 'mohit');
  };

  return (
    <>
      {/* <PageTitle title="Driver" /> */}

      
      <Grid item xs={12} md={12}>
          <Grid container spacing={2}>              
              
              <Grid item xs={12} md={4}>
                <GenericInput label={'Fixed Fare'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput label={'Min Kms'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput label={'Fare Per Kms'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput label={'Driver Charge'} />
              </Grid> 
               <Grid item xs={12} md={4}>
                <GenericInput label={'Night Charges Extra'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericSwitch label={'Add Return Fare For Same City'} />
              </Grid>
            </Grid>
      </Grid>
          
    </>
  );
}
