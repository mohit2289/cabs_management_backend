import { Grid, Paper, styled, Box, Hidden } from '@mui/material';
import Header from './header';
import SideMenu from './side-menu';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}));

const DashboardLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const openDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box sx={{ background: '#e8e2e2' }}>
      <Grid container>
        <Header openDrawer={openDrawer} drawerOpen={drawerOpen} />
      </Grid>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Hidden mdDown>
          <Grid item md={2}>
            <Item>
              <SideMenu />
            </Item>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardLayout;
