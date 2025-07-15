import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { AppBar } from './AppBar';
import { Sidebar } from './Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

const drawerWidth = 240;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: (theme) =>
              theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            marginLeft: 0,
          }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
