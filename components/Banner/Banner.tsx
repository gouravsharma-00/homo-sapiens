import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material'
import Nav from '@components/Banner/Navbar'

export default function Banner() {
    
    return(
        <>
            <AppBar 
            position='absolute'
            elevation={0}
            sx={{background: '#FFFFFF99'}}>
                <Container>
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Image src='/favicon/favicon.svg' width={45} height={45} alt='logo' />
                            <Typography 
                            variant='h6' 
                            color='#2D3FDC' 
                            sx={{ fontWeight: 'bold' }}>HumanEra Intelligence</Typography>
                        </Box>
                        <Nav />
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',
                backgroundImage: 'url(/images/background.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: { xs: 'right', md: 'center' },
            }}>
                
                <Box 
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '70%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    color: 'white',
                    px: { xs: 4, md: 12, lg: 16 },
                    zIndex: 2,
                }}>
                    <Typography variant='h2' fontWeight='bold'>Unlock Your Human Potential</Typography>
                    <Typography>AI-powered tools for human transformation</Typography>
                </Box>
            </Box>
        </>
    )
}