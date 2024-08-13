import { Grid, Typography } from '@mui/material';
import SkillGrid from './skill-grid';

export const Skills = () => {
  return (
    <Grid item container direction='column' justifyContent='center' alignItems='center' xs height='100%'>
      <Typography variant='h5' color='common.white'>
        Technical Skills:
      </Typography>
      <SkillGrid />
    </Grid>
  );
};

export default Skills;
