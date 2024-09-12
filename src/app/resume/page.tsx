import { Box } from '@mui/material';
import React from 'react';

const ResumePage = () => {
  return (
    <Box height='100vh'>
      <iframe title='Resume' src='/assets/portfolio_resume.pdf' width='100%' height='100%' />
    </Box>
  );
};

export default ResumePage;
