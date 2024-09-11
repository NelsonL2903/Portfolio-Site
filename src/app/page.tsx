import Grid from '@mui/material/Grid2';
import Profile from '@/components/about/profile';
import Skills from '@/components/about/skills';

const HomePage = (): JSX.Element => {
  return (
    <Grid container direction='row' alignItems='center' margin='30px' marginTop='60px'>
      <Profile />
      <Skills />
    </Grid>
  );
};

export default HomePage;
