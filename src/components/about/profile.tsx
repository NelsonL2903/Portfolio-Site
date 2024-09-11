import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Portrait from '@/assets/portrait.jpg';
import Itch from '@/assets/itchio.jpg';
import Image from 'next/image';
import ImageLink from '../utils/image-link';

const Profile = () => {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center' size={{ xs: 6 }} height='100%'>
      <Image src={Portrait} alt='portrait' width='288' height='288' />
      <Typography variant='h3' color='common.white'>
        Nelson Loop
      </Typography>
      <Typography variant='h4' color='common.white'>
        Computer Engineering
      </Typography>
      <Typography variant='h5' color='common.white' marginTop='5px'>
        University of Waterloo
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        size={{ xs: 6 }}
        height='100%'
        marginTop='10px'
      >
        <Typography variant='h6' color='common.white' marginRight='8px'>
          Links:
        </Typography>
        <ImageLink src='https://skillicons.dev/icons?i=linkedin' url='https://www.linkedin.com/in/nelsonloop/' />
        <ImageLink src='https://skillicons.dev/icons?i=github' url='https://github.com/NelsonL2903' />
        <ImageLink src={Itch} url='https://nelsonl2903.itch.io/' />
      </Grid>
    </Grid>
  );
};

export default Profile;
