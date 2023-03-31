import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { APP_BAR_HEIGHT } from 'common/constants';
import PagePadder from 'components/scaffold/PagePadder';

function AppContent() {
  return (
    <main>
      <PagePadder sx={{ mt: `${APP_BAR_HEIGHT}px`, pt: 3 }}>
        <ExampleContent />
      </PagePadder>
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
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
        <Typography paragraph={true}>
          This app is a designed to be a template for others to use. It comes with some accessibility libraries
          installed/setup, and its components come designed with accessibility in mind.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AppContent;
