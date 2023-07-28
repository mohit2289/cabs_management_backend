import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const GenericCheckbox = (props) => {
  //const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { label, type, className, name } = props;
  return (
    <FormGroup>
    <FormControlLabel control={<Checkbox />}  label={label} type={type} className={className} name={name} size="small" fullWidth {...props}/>
    </FormGroup>
  )
};
export default GenericCheckbox;
