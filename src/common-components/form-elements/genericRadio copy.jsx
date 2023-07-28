import * as React from 'react';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

const GenericRadio = (props) => {
  const { options, defaultSelected, name, groupLabel, orientation } = props;
  return (
    <>
      <FormLabel>{groupLabel}</FormLabel>
      <RadioGroup
        defaultValue={defaultSelected}
        name={name}
        orientation={orientation}
        sx={{ fontWeight: '470' }}
        {...props}>
        {options.map((option, index) => (
          <Radio value={option.value} label={option.label} color="primary" size="md" key={index} />
        ))}
      </RadioGroup>
    </>
  );
};
export default GenericRadio;
