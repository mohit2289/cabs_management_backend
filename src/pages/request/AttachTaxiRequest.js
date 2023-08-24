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
import TaxiRequestTable from "./TaxiRequestTable";

export default function AttachTaxiRequestPage() {
  var classes = useStyles();

  const handlerChange = (evt) => {
    console.log(evt.target.value, 'mohit');
  };

  return (
    <>
      {/* <PageTitle title="Driver" /> */}
     

        <Grid container spacing={4} sx={{ marginTop:'0' }}>
          <Grid item xs={12}>
           <TaxiRequestTable />
          </Grid>
          </Grid>
    </>
  );
}
