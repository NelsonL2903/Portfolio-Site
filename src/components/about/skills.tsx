import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SkillGrid from './skill-grid';

const Skills = () => {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center' size={{ xs: 6 }} height='100%'>
      <Typography variant='h5' color='common.white'>
        Technical Skills:
      </Typography>
      <SkillGrid />
    </Grid>
  );
};

export default Skills;
