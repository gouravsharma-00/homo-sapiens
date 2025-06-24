import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
export default function Vision() {
    return(
        <Box
      sx={{
        backgroundImage: 'url(/images/img-6.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{ maxWidth: 800, mx: 'auto' }}
      >
        "The future isn't about machines becoming more human. It's about humans becoming more human."
      </Typography>

      <Typography
        variant="body1"
        sx={{ maxWidth: 700, mx: 'auto', color: '#d1d1d1' }}
      >
        Our vision is to create technology that serves humanity's highest potential,
        enabling natural healing, deep emotional growth, and spiritual evolution.
      </Typography>
    </Box>
    )
}