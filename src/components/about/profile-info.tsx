import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Portrait from '@/assets/portrait.jpg';
import Itch from '@/assets/itchio.jpg';
import ImageLink from '../utils/image-link';

const ProfileInfo = () => {
  return (
    <div className='fade-slide' style={{ width: '100%' }}>
      <Grid container direction='row' justifyContent='space-around' alignItems='center' height='100%'>
        <Grid container justifyContent='center' alignItems='center' size={{ xs: 6 }}>
          <img
            src={Portrait.src}
            alt='portrait'
            width='50%'
            height='auto'
            style={{ borderRadius: '20px', border: 'solid 8px #121212' }}
          />
        </Grid>
        <Grid container direction='column' justifyContent='center' alignItems='left' size={{ xs: 6 }}>
          <Typography variant='h1' color='common.white' fontFamily='monaco'>
            Nelson Loop
          </Typography>
          <Typography variant='h4' color='common.white' fontFamily='monaco'>
            Computer Engineering - University of Waterloo
          </Typography>
          <Grid
            container
            direction='row'
            justifyContent='left'
            alignItems='center'
            size={{ xs: 6 }}
            height='100%'
            marginTop='25px'
          >
            <Typography variant='h4' color='common.white' marginRight='8px' fontFamily='monaco'>
              Links:
            </Typography>
            <ImageLink
              src='https://skillicons.dev/icons?i=linkedin'
              url='https://www.linkedin.com/in/nelsonloop/'
              alt='LinkedIn'
            />
            <ImageLink src='https://skillicons.dev/icons?i=github' url='https://github.com/NelsonL2903' alt='Github' />
            <ImageLink src={Itch.src} url='https://nelsonl2903.itch.io/' alt='Itch' />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileInfo;
