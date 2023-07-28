import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import React from 'react';
const GenericAutocomplete = (props) => {
  const { options, label } = props;
  return (
    <>
      <Autocomplete
        id="highlights-demo"
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => {
          return <TextField {...params} label={label} size="small" fullwidth />;
        }}
        renderOption={(props) => {
          // const matches = match(option.title, inputValue, { insideWords: true });
          // const parts = parse(option.title, matches);

          return (
            <li {...props}>
              
            </li>
          );
        }}
      />
    </>
  );
};
export default GenericAutocomplete;
