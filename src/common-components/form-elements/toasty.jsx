import React, { useState } from 'react';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';
import Error from '@mui/icons-material/Error';
import Info from '@mui/icons-material/Info';

const Toasty = (props) => {
  const { show = false, alertWidth, type, message, heading } = props;
  const [visible, setVisible] = useState(!show);
  const handleClose = () => {
    setVisible(!visible);
  };
  return (
    <Stack spacing={2} sx={{ maxWidth: alertWidth }}>
      <Alert
        size="md"
        color={type}
        variant="solid"
        invertedColors
        startDecorator={
          <AspectRatio
            variant="solid"
            ratio="1"
            sx={(theme) => ({
              minWidth: 40,
              borderRadius: '50%',
              boxShadow: `0 2px 12px 0 rgb(${
                theme.vars.palette[
                  type === 'success'
                    ? 'success'
                    : type === 'danger'
                    ? 'danger'
                    : type === 'warning'
                    ? 'warning'
                    : 'info'
                ].lightChannel
              }/0.2)`
            })}
          >
            <div>
              {type === 'success' ? (
                <Check fontSize="xl2" />
              ) : type === 'danger' ? (
                <Error fontSize="xl2" />
              ) : type === 'warning' ? (
                <Warning fontSize="xl2" />
              ) : (
                <Info fontSize="xl2" />
              )}
            </div>
          </AspectRatio>
        }
        hidden={visible}
        endDecorator={
          <IconButton
            variant="plain"
            sx={{
              '--IconButton-size': '32px',
              transform: 'translate(0.5rem, -0.5rem)'
            }}
          >
            <Close onClick={handleClose} />
          </IconButton>
        }
        sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
      >
        <Box>
          <Typography level="body1" fontWeight="lg">
            {heading}
          </Typography>
          <Typography level="body3">{message}</Typography>
        </Box>
        <LinearProgress
          variant="soft"
          value={40}
          sx={(theme) => ({
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            color: `rgb(${
              theme.vars.palette[
                type === 'success'
                  ? 'success'
                  : type === 'danger'
                  ? 'danger'
                  : type === 'warning'
                  ? 'warning'
                  : 'info'
              ].lightChannel
            } / 0.72)`,
            '--LinearProgress-radius': '0px'
          })}
        />
      </Alert>
    </Stack>
  );
};
export default Toasty;
