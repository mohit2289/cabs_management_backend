import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import React from 'react';
const GenericAutocomplete = (props) => {
  const { options = [], label, onChange } = props;
  return (
    <>
      <Autocomplete
        // id="highlights-demo"
        options={options}
        isOptionEqualToValue={(options, value) => options.label === value.label}
        includeInputInList={true}
        onChange = {onChange}
        getOptionLabel={(options) => options.label}
        renderInput={(params) => {
          return <TextField {...params} label={label}  variant="outlined" size="small" />;
        }}
        
      />
    </>
  );
};
export default GenericAutocomplete;
