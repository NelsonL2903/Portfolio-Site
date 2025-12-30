'use client';

import { useState, useCallback } from 'react';
import { Box, Button, Slider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
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
  const [sliderValue, setSliderValue] = useState(100);

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
    <Box display="flex" flexDirection="column" p={2}>
      {jobsExist ? (
        <>
          <Box paddingX={8}>
            <Slider
              aria-label="Timeline"
              value={sliderValue}
              step={1}
              marks={marks}
              onChange={(_, value) => {
                setSliderValue(Number(value));
              }}
              onChangeCommitted={(_, value) => {
                handleSliderChangeCommit(Number(value));
              }}
              sx={{
                '& .MuiSlider-markLabel': {
                  color: 'white'
                }
              }}
            />
          </Box>
          {currentJob && <Experience jobInfo={currentJob} />}
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
        </>
      ) : (
        <Box p={3} textAlign="center">
          <Typography variant="h5">No jobs to display.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TimelinePage;
