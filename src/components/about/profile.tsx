'use client';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import ProfileInfo from './profile-info';
import Interests from './interests';
import Skills from './skills';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Profile = () => {
  const parallax = useRef<IParallax>(null!);
  const pageNum = 3;

  const accentColour = '#252525';
  const cardStyle = {
    backgroundColor: accentColour,
    borderRadius: 20,
    maxWidth: '98%'
  };

  return (
    <Parallax ref={parallax} pages={pageNum}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={0.85}
        style={{ ...cardStyle, boxShadow: '0 -10px 7px -7px white inset' }}
      />
      <ParallaxLayer
        offset={1}
        speed={1}
        factor={0.85}
        style={{ ...cardStyle, boxShadow: '0 -10px 7px -7px white inset, 0 10px 7px -7px white inset' }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        factor={0.85}
        style={{ ...cardStyle, boxShadow: '0 10px 7px -7px white inset' }}
      />
      <ParallaxLayer offset={0.425} speed={-0.75}>
        <div className='flash'>
          <ArrowDownwardIcon style={{ color: 'white', marginLeft: '95%', fontSize: '48px' }} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0} factor={pageNum} />

      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={0.85}
        onClick={() => parallax.current.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ProfileInfo />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={0.85}
        onClick={() => parallax.current.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ProfileInfo />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        factor={0.85}
        onClick={() => parallax.current.scrollTo(2)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.1}
        factor={0.85}
        onClick={() => parallax.current.scrollTo(0)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Interests />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Profile;
