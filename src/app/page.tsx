import { Box, Grid } from '@mui/material';
import Profile from '../components/about/profile';
import Skills from '../components/about/skills';

export const AboutPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Grid
        item
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        xs
        margin='30px'
        marginTop='60px'
      >
        <Profile />
        <Skills />
      </Grid>
    </Box>
  );
};

export default AboutPage;
