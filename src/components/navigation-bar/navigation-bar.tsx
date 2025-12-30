'use client';

import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const NavigationBar = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const NavigationItem = ({ text, route }: { text: string; route: string }): JSX.Element => (
    <Grid display="flex" justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
      <Button type="button" onClick={() => router.push(route)}>
        <Typography variant="h5" color={pathname == route ? '' : 'white'}>
          {text}
        </Typography>
      </Button>
    </Grid>
  );

  return (
    <Grid
      direction="row"
      container
      component="header"
      marginBottom="30px"
      style={{ backgroundColor: '#252525' }}
    >
      <NavigationItem text="About" route="/" />
      <NavigationItem text="Experience" route="/timeline" />
      <NavigationItem text="Resume" route="/resume" />
    </Grid>
  );
};

export default NavigationBar;
