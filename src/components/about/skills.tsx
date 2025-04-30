import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SkillGrid from './skill-grid';
import Portrait from '@/assets/casual-portrait.jpg';

const Skills = () => {
  return (
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
      <Grid container direction='column' justifyContent='center' alignItems='center' size={{ xs: 6 }}>
        <Typography variant='h5' color='common.white'>
          Technical Skills:
        </Typography>
        <SkillGrid />
      </Grid>
    </Grid>
  );
};

export default Skills;
