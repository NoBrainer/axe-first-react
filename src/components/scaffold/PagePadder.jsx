import { Grid } from '@mui/material';
import { arrayOf, node, object, oneOfType } from 'prop-types';
import React from 'react';

function PagePadder({ children, sx } = {}) {
  return (
    <Grid container direction='row' sx={sx}>
      <Grid item xs={false} sm={1} md={2} />
      <Grid container item xs={12} sm={10} md={8}>
        {children}
      </Grid>
      <Grid item xs={false} sm={1} md={2} />
    </Grid>
  );
}

PagePadder.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  sx: object,
};

export default PagePadder;
