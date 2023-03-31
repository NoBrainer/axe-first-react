import { Box } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { APP_NAV_WIDTH, APP_NAV_WIDTH_COLLAPSED } from 'common/constants';
import AppContent from 'components/AppContent';
import AppFooter from 'components/AppFooter';
import AppHeader from 'components/AppHeader';
import AppNav from 'components/AppNav';

function App() {
  const [isNavExpanded, setNavExpanded] = useState(true);
  const navWidth = useMemo(() => (isNavExpanded ? APP_NAV_WIDTH : APP_NAV_WIDTH_COLLAPSED), [isNavExpanded]);
  const makeSpaceForNav = useMemo(() => ({ ml: `${navWidth}px`, width: `calc(100% - ${navWidth}px)` }), [navWidth]);
  const handleToggleNav = useCallback(() => {
    setNavExpanded(!isNavExpanded);
  }, [isNavExpanded]);
  return (
    <>
      <AppNav isExpanded={isNavExpanded} onToggle={handleToggleNav} />
      <AppHeader sx={makeSpaceForNav} />
      <Box sx={makeSpaceForNav}>
        <AppContent />
        <AppFooter />
      </Box>
    </>
  );
}

export default App;
