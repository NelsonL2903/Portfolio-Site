'use client';

import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const NavigationItem = ({ text, route }: { text: string; route: string }) => (
    <Grid display='flex' justifyContent='center' alignItems='center' size='grow'>
      <Button type='button' onClick={() => router.push(route)}>
        <Typography color={pathname == route ? '' : 'white'}>{text}</Typography>
      </Button>
    </Grid>
  );

  return (
    <Grid direction='row' container component='header'>
      <NavigationItem text='About' route='/' />
      <NavigationItem text='Experience' route='/timeline' />
      <NavigationItem text='Resume' route='/resume' />
    </Grid>
  );
};

export default NavigationBar;
