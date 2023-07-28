import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
const GenericSwitch = (props) => {
  //const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { label, type, className, name } = props;
  return (
    <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />}  label={label} type={type} className={className} name={name} size="small" fullWidth {...props}/>
    </FormGroup>
  )
};
export default GenericSwitch;