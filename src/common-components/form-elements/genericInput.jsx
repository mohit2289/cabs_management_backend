import { TextField } from '@mui/material';
import React from 'react';

const GenericInput = (props) => {
  const { label, type, className, name } = props;
  return (
    <TextField label={label} type={type} className={className} name={name} size="small" fullWidth {...props} />
  );
};
export default GenericInput;
