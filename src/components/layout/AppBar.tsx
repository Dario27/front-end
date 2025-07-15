import React from 'react';
import { AppBar as MuiAppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type AppBarProps = {
  open: boolean;
  toggleDrawer: () => void;
};

export const AppBar: React.FC<AppBarProps> = ({ open, toggleDrawer }) => {
  return (
    <MuiAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          My Web Application
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
