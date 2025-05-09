'use client';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';
import { useRef, useState } from 'react';
import Interests from '../interests/interests';
import Skills from './skills';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ParallaxCard from './ParallaxCard';
import { CARD_HEIGHT, CARD_NUM, CARD_WIDTH } from './constants';
import { Box, Grid } from '@mui/material';
import { decrementPage, incrementPage } from './helpers';
import Profile from './profile';

const ARROW_BOX_HEIGHT = '25%';

const About = (): JSX.Element => {
  const parallax = useRef<IParallax>(null!);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        pointerEvents: 'none'
      }}
    >
      <Parallax ref={parallax} pages={CARD_NUM} style={{ width: CARD_WIDTH, overflow: 'hidden' }}>
        <ParallaxLayer offset={0} speed={0} factor={CARD_NUM} />
        <ParallaxCard offset={0} component={<Profile />} />
        <ParallaxCard offset={1} component={<Skills />} />
        <ParallaxCard offset={2} component={<Interests />} />
        <ParallaxLayer offset={0} speed={-1}>
          <Grid
            className="flash"
            container
            display="flex"
            direction="column"
            justifyContent="space-between"
            height={CARD_HEIGHT}
          >
            <Grid
              height={ARROW_BOX_HEIGHT}
              padding="20px"
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-start"
              sx={{
                visibility: currentPage === 0 ? 'hidden' : 'visible',
                pointerEvents: 'auto'
              }}
              onClick={() => decrementPage(currentPage, setCurrentPage, parallax)}
            >
              <ArrowUpward style={{ color: 'white', fontSize: '48px' }} />
            </Grid>
            <Grid
              height={ARROW_BOX_HEIGHT}
              padding="20px"
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{
                visibility: currentPage === CARD_NUM - 1 ? 'hidden' : 'visible',
                pointerEvents: 'auto'
              }}
              onClick={() => incrementPage(currentPage, setCurrentPage, parallax)}
            >
              <ArrowDownward style={{ color: 'white', fontSize: '48px' }} />
            </Grid>
          </Grid>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default About;
