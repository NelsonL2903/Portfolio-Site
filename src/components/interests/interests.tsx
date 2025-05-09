import { Typography, Grid } from '@mui/material';
import { ReactTyped } from 'react-typed';

const typedStrings = [
  'programming.',
  'gaming.',
  'playing baseball.',
  'comics.',
  'pop-punk and emo music.',
  'watching TV and movies.'
];

const portraitStyle = {
  borderRadius: '20px',
  border: 'solid 8px #121212'
};

const Interests = (): JSX.Element => {
  return (
    <Grid container justifyContent="space-around" alignItems="center" height="100%">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        size={{ xs: 6 }}
      >
        <Typography variant="h3" color="common.white" fontFamily="monaco">
          About me:
        </Typography>
        <Grid width="80%">
          <Typography variant="h4" color="common.white" fontFamily="monaco">
            I love <ReactTyped strings={typedStrings} typeSpeed={70} backSpeed={50} loop />
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" size={{ xs: 6 }}>
        <img
          src="/assets/beach-portrait.jpg"
          alt="portrait"
          width="50%"
          height="auto"
          style={portraitStyle}
        />
      </Grid>
    </Grid>
  );
};

export default Interests;
