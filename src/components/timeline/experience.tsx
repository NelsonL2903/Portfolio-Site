import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type jobInfo = {
  logo: StaticImageData;
  name: string;
  title: string;
  start: string;
  end: string;
  achievements: string[];
};

const Experience = ({ jobInfo }: { jobInfo: jobInfo }): JSX.Element => {
  const job = jobInfo;

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ margin: '30px' }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ flex: 1, height: '100%' }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: '30vh', flex: '0 0 66.666%', position: 'relative' }}
        >
          <Image
            src={job.logo}
            alt="logo"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </Grid>
        <Typography variant="h5" style={{ color: 'white', marginTop: '25px' }}>
          {job.name}
        </Typography>
        <Typography variant="h6" style={{ color: 'white', marginTop: '15px' }}>
          {job.title}
        </Typography>
        <Typography variant="h6" style={{ color: 'white', marginTop: '15px' }}>
          {job.start} - {job.end}
        </Typography>
      </Grid>
      <Grid container direction="column" justifyContent="flex-start" alignItems="center">
        <List>
          {job.achievements.map((achievement) => (
            <ListItem key={achievement}>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '18px', color: 'white' }} primary={achievement} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Experience;
