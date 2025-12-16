import { Box } from '@mui/material';
import React from 'react';

const ResumePage = (): JSX.Element => {
  return (
    <Box display="flex" height="100vh" paddingX={4} paddingBottom={13}>
      <iframe title="Resume" src="/assets/portfolio_resume.pdf" width="100%" height="100%" />
    </Box>
  );
};

export default ResumePage;
