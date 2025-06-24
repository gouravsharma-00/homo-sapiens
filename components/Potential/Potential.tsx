import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';


const tools = [
  {
    title: 'Brain Enhancement',
    desc: 'Unlock 100% of your cognitive potential through advanced neural training.',
    img: '/images/img-7.svg',
  },
  {
    title: 'Meditation Master',
    desc: 'Achieve deeper states of consciousness through guided practices.',
    img: '/images/img-8.svg',
  },
  {
    title: 'Natural Healing',
    desc: 'Activate your body"s wisdom, restore balance, vitality, and resilience.',
    img: '/images/img-9.svg',
  },
  {
    title: 'Spiritual Growth',
    desc: 'Elevate consciousness, cultivate inner peace, purpose, and awareness.',
    img: '/images/img-10.svg',
  },
  {
    title: 'Sleep Mastery',
    desc: 'Optimize your sleep cycles for enhanced recovery and growth.',
    img: '/images/img-11.svg',
  },
  {
    title: 'Emotional Intelligence',
    desc: 'Develop deeper awareness, enhance empathy, self-regulation, and connection.',
    img: '/images/img-12.svg',
  },
];

export default function Potential() {
  return (
    <Box textAlign="center" px={2} py={6}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Unlock Your Potential
      </Typography>
      <Typography variant="body1" mb={5} maxWidth={700} mx="auto">
        Our platform offers a suite of tools designed to enhance your natural abilities and unlock your full potential.
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {
            tools.map((tool, index) => (
                <Card variant='outlined' key={index} sx={{ maxWidth: 345, margin: '20px auto', p: 1, borderRadius: 5}}>
                    <img src={tool.img} alt={tool.title} style={{ width: '100%', height: 'auto' }} />
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                        {tool.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {tool.desc}
                        </Typography>
                    </CardContent>
                </Card>
            ))
        }
      </Box>
    </Box>
  );
}
