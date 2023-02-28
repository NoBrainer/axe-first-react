import { Box } from '@mui/material';
import React from 'react';
import { APP_BAR_HEIGHT } from 'common/constants';
import AppContent from 'components/AppContent';
import AppFooter from 'components/AppFooter';
import AppHeader from 'components/AppHeader';

function App() {
  return (
    <>
      <AppHeader />
      <Box
        sx={{
          flexGrow: 1,
          marginTop: `${APP_BAR_HEIGHT}px`,
          padding: 3,
        }}
      >
        <AppContent />
        <AppFooter />
      </Box>
    </>
  );
}

export default App;
