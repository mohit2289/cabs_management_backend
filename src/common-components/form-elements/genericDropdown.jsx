import { MenuItem, TextField } from '@mui/material';

const GenericDropdown = (props) => {
  const { label, type, className, data = [] } = props;
  return (
    <TextField
      label={label}
      type={type}
      className={className}
      size="small"
      fullWidth
      {...props}
      select
    >
      {data.map((item, index) => {
        return (
          <MenuItem key={`${item?.key}-${index}`} value={item?.value}>
            {item?.value}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default GenericDropdown;
