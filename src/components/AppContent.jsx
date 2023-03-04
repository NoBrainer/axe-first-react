import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

function AppContent() {
  return (
    <main>
      <Grid container direction='row'>
        <Grid item xs={false} sm={1} md={2} />
        <Grid container item xs={12} sm={10} md={8}>
          <Grid container direction='column'>
            <ExampleContent />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} md={2} />
      </Grid>
    </main>
  );
}

function ExampleContent() {
  return (
    <Card>
      <CardContent>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AppContent;
