import React from 'react'
import { 
    Box, 
    Typography,
    Card, CardContent,
    List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image'

export default function Philosophy() {
    const Phi = [
        {
            title: "AI as a Tool, Not a Replacement", 
            body: "We believe in creating technology that enhances human capabilities rather than attempting to replace the irreplaceable human spirit.", 
            img : "/images/img-1.svg"
        },
        {
            title: "Created to Serve, Not Surpass", 
            body: "Just as humans created AI, AI can never replace its creator - our technology is designed to serve humanity's highest potential.", 
            img : "/images/img-2.svg"
        },
        {
            title: "Evolution of Human Consciousness", 
            body: "The real revolution isn't machines becoming human-like - it's humans becoming more human through enhanced intelligence.", 
            img : "/images/img-3.svg"
        }
    ]
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant='h3' fontWeight='bold' sx={{marginBottom: 2}}>Our Core Philosophy</Typography>
                <Typography sx={{ margin: 'auto', maxWidth: '900px', textAlign: 'center' }}>
                    Unlike traditional AI platforms that focus on replacing human labor, 
                    HumanEra Intelligence envisions a future where AI is used as a tool to 
                    help humans unlock their full potential.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'row'}, marginTop: 4, gap: 2, justifyContent: 'center' }}>
                    {
                        Phi.map((item) => {
                            return(
                                <Card variant='outlined' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 4, p: 3, gap: 2 }} key={item.title}>
                                    <Image src={item.img} alt={item.title} width={50} height={50} />
                                    <Typography fontWeight='bold'>{item.title}</Typography>
                                    <Typography fontSize='small'>{item.body}</Typography>
                                </Card>
                            )
                        })
                    }
                </Box>
            </Box>
            <Box>
                <Typography variant='h4' fontWeight='bold' sx={{ textAlign: 'center', marginBottom: 2 }}>A New Paradigm</Typography>
                <Typography sx={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
                    See how HumanEra Intelligence transforms the relationship between humans and technology.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, justifyContent: 'center', marginTop: 4 }}>
                    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', borderRadius: 4, p: 3, gap: 2 }}>
                        <Image src='/images/img-4.svg' alt='img' width={50} height={50} />
                        <Typography fontWeight='bold'>Traditional AI</Typography>
                        <CardContent sx={{ pt: 0 }}>
                            <List>
                            {[
                                'Focuses on replacing human tasks and labor',
                                'Creates dependency on technology',
                                'Mimics human thinking',
                                'Treats humans as data points to be optimized',
                            ].map((text, idx) => (
                                <ListItem key={idx} disablePadding sx={{ alignItems: 'flex-start' }}>
                                <ListItemIcon>
                                    <CloseIcon color="error" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                </ListItem>
                            ))}
                            </List>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', borderRadius: 4, p: 3, gap: 2 }}>
                        <Image src='/images/img-4.svg' alt='img' width={50} height={50} />
                        <Typography fontWeight='bold'>HumanEra Approach</Typography>
                        <CardContent sx={{ pt: 0 }}>
                            <List>
                            {[
                                'Enhances human capabilities and potential',
                                'Promotes autonomy and self-discovery',
                                'Facilitates deeper emotional and spiritual growth',
                                'Honors the sacred nature of human consciousness',
                            ].map((text, idx) => (
                                <ListItem key={idx} disablePadding sx={{ alignItems: 'flex-start' }}>
                                <ListItemIcon>
                                    <CheckIcon color="success" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                </ListItem>
                            ))}
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}