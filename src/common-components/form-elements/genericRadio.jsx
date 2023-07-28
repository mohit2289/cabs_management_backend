import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GenericRadio() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Trip Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="local" control={<Radio />} label="Local" />
        <FormControlLabel value="Outstaion" control={<Radio />} label="Outstation" />
        <FormControlLabel value="PointToPoint" control={<Radio />} label="Point to Point" />
        <FormControlLabel value="Transfer" control={<Radio />} label="Transfer" />
      </RadioGroup>
    </FormControl>
  );
}