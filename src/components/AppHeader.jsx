import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { APP_BAR_HEIGHT } from 'common/constants';
import PagePadder from 'components/scaffold/PagePadder';

function AppHeader() {
  return (
    <AppBar position='fixed' sx={{ height: `${APP_BAR_HEIGHT}px` }}>
      <PagePadder>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography component='h1'>Axe-First React App</Typography>
        </Toolbar>
      </PagePadder>
    </AppBar>
  );
}

export default AppHeader;
