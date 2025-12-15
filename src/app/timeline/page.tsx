'use client';

import { Box, Button, Slider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useMemo, useState } from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import Experience from '@/components/timeline/experience';
import { jobs } from '@/components/utils/jobs_info';

type marks = { value: number; label: string }[];

const TimelinePage = (): JSX.Element => {
  const marks: marks = [];
  const markBaseValue = 100 / (jobs.length - 1);
  const [sliderValue, setSliderValue] = useState(0);

  const sliderIndex = useMemo(
    () => Math.round(sliderValue / markBaseValue),
    [sliderValue, markBaseValue]
  );

  jobs.forEach((job, index) => {
    marks.push({ value: markBaseValue * index, label: job.start });
  });

  const valueLabelFormat = (value: number): string => {
    return marks[marks.findIndex((mark) => mark.value === value)]?.label;
  };

  const handleSliderChange = (value: number): void => {
    setSliderValue(value);
  };

  const handleSliderChangeCommit = (value: number): void => {
    const closestIndex = getClosestIndex(value);
    setSliderValue(closestIndex * markBaseValue);
  };

  const getClosestIndex = (value: number): number => {
    let closestValue = 0;
    let closestIndex = 0;

    marks.forEach((mark, index) => {
      const diff = Math.abs(value - mark.value);

      if (diff < Math.abs(value - closestValue)) {
        closestValue = mark.value;
        closestIndex = index;
      }
    });
    return closestIndex;
  };

  const handlePrevious = (): void => {
    const newIndex = sliderIndex - 1;
    setSliderValue(newIndex * markBaseValue);
  };

  const handleNext = (): void => {
    const newIndex = sliderIndex + 1;
    setSliderValue(newIndex * markBaseValue);
  };

  return (
    <Box display="flex" flexDirection="column" height="90vh">
      <Grid container direction="row" justifyContent="flex-start" height="85%" overflow="auto">
        <Slider
          aria-label="Restricted values"
          value={sliderValue}
          valueLabelFormat={valueLabelFormat}
          step={1}
          marks={marks}
          classes={{ markLabel: 'color=white' }}
          onChange={(event) => {
            const target = event.target as HTMLInputElement;
            handleSliderChange(Number(target.value));
          }}
          onChangeCommitted={(_, value) => {
            handleSliderChangeCommit(value);
          }}
          style={{
            marginTop: '15px',
            marginLeft: '50px',
            marginRight: '50px'
          }}
          sx={{
            '& .MuiSlider-markLabel': {
              color: 'white'
            }
          }}
        />
        {jobs.map(
          (job, index) =>
            sliderIndex === index && <Experience key={job.name + ' ' + job.start} jobInfo={job} />
        )}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        component="footer"
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<NavigateBefore />}
          style={{ marginRight: '30px' }}
          disabled={sliderIndex === 0}
          onClick={() => {
            handlePrevious();
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<NavigateNext />}
          disabled={sliderIndex === jobs.length - 1}
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </Button>
      </Grid>
    </Box>
  );
};

export default TimelinePage;
