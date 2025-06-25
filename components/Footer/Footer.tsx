import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X'; // or use Twitter if not using X yet
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'linear-gradient(to right, #0f172a, #1e3a8a)',
        background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
        color: 'white',
        pt: 6,
        pb: 2,
        px: { xs: 3, md: 10 },
        marginTop: 5
      }}
    >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexDirection: {sl: 'column', sm: 'column', md: 'row' }, gap: 5}}>
            {/* About */}
            <Box sx={{display: {sm: 'none',md: 'block'}}}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                    <Image src='/favicon/favicon.svg' width={50} height={50} alt='img' />
                    <Typography variant="h6" fontWeight="bold" color='white'>HumanEra Intelligence</Typography>
                </Box>
                <Typography variant="body2" fontWeight="bold" color='gray' gutterBottom sx={{ maxWidth: 400 }}>
                    HumanEra Intelligence is built on the belief that the future of AI lies not in replication, but in revelation—of human spirit, emotional depth, and limitless inner potential. We don’t make machines more human—we help humans become more whole.
                </Typography>
            </Box>
            {/* Links */}
            <Box sx={{ display: {sm: 'none', md: 'flex'}, gap: 8 }}>
                <Box>  
                    <Typography fontWeight="bold" gutterBottom>
                        QUICK LINK
                    </Typography>
                    <Link href="#" color="inherit" underline="none" fontWeight='normal' fontSize='small' display="block" mb={1}>
                        About Us
                    </Link>
                    <Link href="#" color="inherit" underline="none" fontWeight='normal' fontSize='small' display="block" mb={1}>
                        Privacy Policy
                    </Link>
                    <Link href="#" color="inherit" underline="none" fontWeight='normal' fontSize='small' display="block">
                        Sitemap
                    </Link>
                </Box>
                <Box>  
                    <Typography fontWeight="bold" gutterBottom>
                        SUPPORT
                    </Typography>
                    <Link href="#" color="inherit" underline="none" fontWeight='normal' fontSize='small' display="block" mb={1}>
                        FAQs
                    </Link>
                    <Link href="#" color="inherit" underline="none" fontWeight='normal' fontSize='small' display="block" mb={1}>
                        Contact Us
                    </Link>
                    <Link href="#" color="inherit" underline="none" fontWeight='normal' fontSize='small' display="block">
                        Careers
                    </Link>
                </Box>
            </Box>
            {/* Social */}
            <Box>
                <Typography sx={{textAlign: 'center'}} gutterBottom>
                    STAY CONNECTED WITH US
                </Typography>
                <Box display="flex" gap={1} mt={1}>
                    <IconButton color="inherit" href="#"><FacebookIcon /></IconButton>
                    <IconButton color="inherit" href="#"><TwitterIcon /></IconButton>
                    <IconButton color="inherit" href="#"><InstagramIcon /></IconButton>
                    <IconButton color="inherit" href="#"><YouTubeIcon /></IconButton>
                    <IconButton color="inherit" href="#"><LinkedInIcon /></IconButton>
                </Box>
            </Box>
        </Box>

      {/* Bottom Bar */}
      <Box mt={5} pt={2} borderTop="1px solid rgba(255,255,255,0.1)" display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={{sm: 'center', md: "space-between"}} alignItems="center">
            <Typography variant="body2" color="gray" sx={{display: {sm: 'none', md: 'inline-block'}}} >
            © 2025 HumanEra Intelligence. All rights reserved.
            </Typography>
            <Box display="flex" gap={2} mt={{ xs: 1, sm: 0 }}>
                <Link href="#" color="gray" underline="hover">Privacy Policy</Link>
                <Link href="#" color="gray" underline="hover">Terms & Conditions</Link>
                <Link href="#" color="gray" underline="hover">Cookie Policy</Link>
            </Box>
      </Box>
    </Box>
  );
}
