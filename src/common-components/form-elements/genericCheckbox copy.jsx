import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const GenericCheckbox = (props) => {
  const { list } = props;
  return (
    <FormGroup {...props}>
      {list.map((item, index) => (
        <FormControlLabel
          key={`checkbox-${index}`}
          control={<Checkbox value={item.value} />}
          label={item.label}
        />
      ))}
    </FormGroup>
  );
};
export default GenericCheckbox;
