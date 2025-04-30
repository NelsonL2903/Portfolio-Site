import Grid from '@mui/material/Grid2';
import Profile from '@/components/about/profile';

const HomePage = (): JSX.Element => {
  return (
    <Grid container marginX='30px'>
      <Profile />
    </Grid>
  );
};

export default HomePage;
