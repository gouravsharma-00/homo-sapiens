'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
} from '@mui/material';

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const res = await fetch('api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      }),
    });

      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
        setOpen(true);
      } else {
        const data = await res.json();
        alert('Error: ' + data.error);
      }
    } catch (err) {
      console.error('Feedback submit failed', err);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Share Your Feedback
      </Typography>
      <Typography variant="subtitle1" textAlign="center" gutterBottom>
        We'd love to hear what you think!
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          variant="standard"
          label="Name"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
          InputProps={{ disableUnderline: false }}
        />
        <TextField
          variant="standard"
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={form.email}
          onChange={handleChange}
          InputProps={{ disableUnderline: false }}
        />
        <TextField
          variant="standard"
          label="Your Feedback"
          name="message"
          multiline
          rows={4}
          fullWidth
          value={form.message}
          onChange={handleChange}
          InputProps={{ disableUnderline: false }}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, alignSelf: 'flex-end' }}>
          Submit
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Thank you for your feedback!"
      />
    </Box>
  );
}
