'use client';

import { useState, useCallback } from 'react';
import { Box, Button, Grid, Slider } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import Experience from '@/components/timeline/experience';
import { jobs } from '@/components/utils/jobs_info';

type Mark = { value: number; label: string };

const jobsExist = jobs.length > 0;
const markBaseValue = 100 / (jobs.length - 1);

const marks: Mark[] = jobs.map((job, index) => ({
  value: markBaseValue * index,
  label: job.start
}));

const TimelinePage = (): JSX.Element => {
  const [sliderValue, setSliderValue] = useState(0);

  const sliderIndex = Math.min(
    Math.max(Math.round(sliderValue / markBaseValue), 0),
    jobs.length - 1
  );

  const handleSliderChangeCommit = (value: number): void => {
    const closestValue = getClosestValue(value);
    setSliderValue(closestValue);
  };

  const getClosestValue = (value: number): number => {
    let closestValue = 0;

    marks.forEach((mark) => {
      const diff = Math.abs(value - mark.value);

      if (diff < Math.abs(value - closestValue)) {
        closestValue = mark.value;
      }
    });
    return closestValue;
  };

  const handlePrevious = useCallback((): void => {
    setSliderValue((previous) => {
      const currentIndex = Math.round(previous / markBaseValue);
      const newIndex = Math.max(0, currentIndex - 1);
      return newIndex * markBaseValue;
    });
  }, []);

  const handleNext = useCallback((): void => {
    setSliderValue((previous) => {
      const currentIndex = Math.round(previous / markBaseValue);
      const newIndex = Math.min(jobs.length - 1, currentIndex + 1);
      return newIndex * markBaseValue;
    });
  }, []);

  const currentJob = jobsExist ? jobs[sliderIndex] : undefined;

  return (
    <Box display="flex" flexDirection="column" height="90vh">
      <Grid container direction="row" justifyContent="flex-start" height="85%" overflow="auto">
        {jobsExist ? (
          <>
            <Slider
              aria-label="Timeline"
              value={sliderValue}
              step={1}
              marks={marks}
              onChange={(_, value) => {
                setSliderValue(Number(value));
              }}
              onChangeCommitted={(_, value) => {
                handleSliderChangeCommit(value);
              }}
              sx={{
                'mt': 2,
                'mx': 6,
                '& .MuiSlider-markLabel': {
                  color: 'white'
                }
              }}
            />
            {currentJob && <Experience jobInfo={currentJob} />}
          </>
        ) : (
          <Box p={3} color="white">
            No jobs to display.
          </Box>
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
          sx={{ mr: 4 }}
          disabled={!jobsExist || sliderIndex === 0}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<NavigateNext />}
          disabled={!jobsExist || sliderIndex === jobs.length - 1}
          onClick={handleNext}
        >
          Next
        </Button>
      </Grid>
    </Box>
  );
};

export default TimelinePage;
