import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
const GenericSwitch = (props) => {
  const { styles, start, end, label } = props;
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Switch
        variant="outlined"
        {...props}
        sx={{ ...styles }}
        startDecorator={<Typography>{start}</Typography>}
        endDecorator={<Typography>{end}</Typography>}
      />
    </>
  );
};
export default GenericSwitch;
