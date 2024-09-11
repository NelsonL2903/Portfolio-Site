import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Profile from '@/components/about/profile';
import Skills from '@/components/about/skills';

const AboutPage = (): JSX.Element => {
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
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        size={{ xs: 6 }}
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
