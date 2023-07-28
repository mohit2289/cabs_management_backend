import { Fragment } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const GenericLoadingButton = (props) => {
  const { title } = props;
  return (
    <Fragment>
      <LoadingButton
        loading={false}
        variant="contained"
        //   loadingPosition="start"
        {...props}
      >
        {title}
      </LoadingButton>
    </Fragment>
  );
};
export default GenericLoadingButton;
