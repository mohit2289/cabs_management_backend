import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TextField } from '@mui/material';
const GenericDatePicker = (props) => {
  const { label } = props;

  return (
    <DatePicker
      label={label}
      slotProps={{ textField: { size: 'small', fullWidth: '100%' } }}
      {...props}
    />
  );
};
export default GenericDatePicker;


