

import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "How does Human Era Intelligence differ from other AI platforms?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
  },
  {
    question: "Is scientific evidence behind your approach?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    question: "How soon can I expect to see results?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
  },
  {
    question: "Is my data safe and private?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
  }
];

export default function Faq() {
  return (
    <Box sx={{  mx: 'auto', mt: 4, p: 2, maxWidth: 900 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}  
            elevation={0}
            disableGutters
            square
            sx={{
                borderBottom: '1px solid #ddd',
                
            }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography variant='body2'>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
