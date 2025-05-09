import { Grid, Stack, Typography } from '@mui/material';
import ImageLink from '../utils/image-link';

const Profile = (): JSX.Element => {
  return (
    <div className="fade-slide">
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Grid container justifyContent="center" alignItems="center" width="38%">
          <img
            src="/assets/portrait.jpg"
            alt="portrait"
            width="100%"
            height="auto"
            style={{ borderRadius: '20px', border: 'solid 8px #121212' }}
          />
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="left">
          <Typography variant="h1" color="common.white" fontFamily="monaco">
            Nelson Loop
          </Typography>
          <Typography variant="h4" color="common.white" fontFamily="monaco">
            Computer Engineering - University of Waterloo
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="center"
            size={{ xs: 6 }}
            height="100%"
            marginTop="25px"
            sx={{ pointerEvents: 'auto' }}
          >
            <Typography variant="h4" color="common.white" marginRight="8px" fontFamily="monaco">
              Links:
            </Typography>
            <ImageLink
              src="https://skillicons.dev/icons?i=linkedin"
              url="https://www.linkedin.com/in/nelsonloop/"
              alt="LinkedIn"
            />
            <ImageLink
              src="https://skillicons.dev/icons?i=github"
              url="https://github.com/NelsonL2903"
              alt="Github"
            />
            <ImageLink src="/assets/itchio.jpg" url="https://nelsonl2903.itch.io/" alt="Itch" />
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Profile;
