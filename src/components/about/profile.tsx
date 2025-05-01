'use client';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';
import { useRef, useState } from 'react';
import ProfileInfo from './profile-info';
import Interests from './interests';
import Skills from './skills';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ParallaxCard from './ParallaxCard';
import { CARD_HEIGHT, CARD_NUM, CARD_WIDTH } from './constants';
import { Box, Grid } from '@mui/material';
import { decrementPage, incrementPage } from './helpers';

const Profile = () => {
  const parallax = useRef<IParallax>(null!);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Parallax ref={parallax} pages={CARD_NUM} style={{ width: CARD_WIDTH, overflow: 'hidden' }}>
        <ParallaxLayer offset={0} speed={0} factor={CARD_NUM} />
        <ParallaxCard offset={0} component={<ProfileInfo />} />
        <ParallaxCard offset={1} component={<Skills />} />
        <ParallaxCard offset={2} component={<Interests />} />
        <ParallaxLayer offset={0} speed={-1}>
          <Box className="flash" style={{ height: CARD_HEIGHT }}>
            <Grid
              style={{ height: '50%', padding: '20px' }}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                visibility: currentPage === 0 ? 'hidden' : 'visible'
              }}
              onClick={() => decrementPage(currentPage, setCurrentPage, parallax)}
            >
              <ArrowUpward style={{ color: 'white', fontSize: '48px' }} />
            </Grid>
            <Grid
              style={{ height: '50%', padding: '20px' }}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                visibility: currentPage === CARD_NUM - 1 ? 'hidden' : 'visible'
              }}
              onClick={() => incrementPage(currentPage, setCurrentPage, parallax)}
            >
              <ArrowDownward style={{ color: 'white', fontSize: '48px' }} />
            </Grid>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default Profile;
