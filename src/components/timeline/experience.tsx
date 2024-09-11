import { Slide, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid2';
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

const Experience = ({ jobInfo }: { jobInfo: jobInfo }) => {
  const job = jobInfo;

  return (
    <Slide direction='right' in>
      <Grid container direction='row' justifyContent='flex-start' alignItems='center' size='grow' margin='30px'>
        <Grid container direction='column' justifyContent='flex-start' alignItems='center' size='grow' height='100%'>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            height='30vh'
            size={{ xs: 8 }}
            position='relative'
          >
            <Image
              src={job.logo}
              alt='logo'
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </Grid>
          <Typography variant='h5' style={{ color: 'white', marginTop: '25px' }}>
            {job.name}
          </Typography>
          <Typography variant='h6' style={{ color: 'white', marginTop: '15px' }}>
            {job.title}
          </Typography>
          <Typography variant='h6' style={{ color: 'white', marginTop: '15px' }}>
            {job.start} - {job.end}
          </Typography>
        </Grid>
        <Grid container direction='column' justifyContent='flex-start' alignItems='center' size='grow'>
          <List>
            {job.achievements.map((achievement) => (
              <ListItem key={achievement}>
                <ListItemIcon>
                  <ArrowForwardIcon fontSize='large' style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '18px', color: 'white' }} primary={achievement} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Experience;
