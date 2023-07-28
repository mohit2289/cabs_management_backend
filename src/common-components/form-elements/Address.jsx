import React from 'react';

import GenericInput from './genericInput';
import { Grid } from '@mui/material';
import GenericDropdown from './genericDropdown';

function Address(props) {
  let DisplayNone;

  if (props.value === 'displaynone') {
    DisplayNone = {
      display: 'none'
    };
  } else {
    DisplayNone = {
      display: 'block'
    };
  }

  return (
    <>
      <Grid item xs={12} md={3} style={DisplayNone}>
        <GenericInput label={'Pincode'} />
      </Grid>
      <Grid item xs={12} md={3} style={DisplayNone}>
        <GenericDropdown label={'State'} />
      </Grid>
      <Grid item xs={12} md={3} style={DisplayNone}>
        <GenericDropdown label={'City'} />
      </Grid>
      <Grid item xs={12} md={3} style={DisplayNone}>
        <GenericDropdown label={'Locality'} />
      </Grid>
    </>
  );
}

export default Address;
