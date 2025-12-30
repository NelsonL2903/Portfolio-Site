import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SkillGrid from './skill-grid';

const Skills = (): JSX.Element => {
  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center" height="100%">
      <Grid container justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
        <img
          src="/assets/casual-portrait.jpg"
          alt="portrait"
          width="50%"
          height="auto"
          style={{ borderRadius: '20px', border: 'solid 8px #121212' }}
        />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ flex: 1 }}
      >
        <Typography variant="h5" color="common.white">
          Technical Skills:
        </Typography>
        <SkillGrid />
      </Grid>
    </Grid>
  );
};

export default Skills;
