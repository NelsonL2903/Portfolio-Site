import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Portrait from '@/assets/beach-portrait.jpg';
import { ReactTyped } from 'react-typed';

const Interests = () => {
  return (
    <Grid container direction='row' justifyContent='space-around' alignItems='center' height='100%'>
      <Grid container direction='column' justifyContent='center' alignItems='center' size={{ xs: 6 }}>
        <Typography variant='h3' color='common.white' fontFamily='monaco'>
          About me:
        </Typography>
        <Grid container justifyContent='left' alignItems='top' width='80%'>
          <Typography variant='h2' color='common.white' fontFamily='monaco'>
            I love{' '}
            <ReactTyped
              strings={[
                'programming.',
                'gaming.',
                'playing baseball.',
                'comics.',
                'pop-punk and emo music.',
                'watching TV and movies.'
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' alignItems='center' size={{ xs: 6 }}>
        <img
          src={Portrait.src}
          alt='portrait'
          width='50%'
          height='auto'
          style={{ borderRadius: '20px', border: 'solid 8px #121212' }}
        />
      </Grid>
    </Grid>
  );
};

export default Interests;
