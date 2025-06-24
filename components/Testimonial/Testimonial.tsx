import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent
} from '@mui/material'
import Image from 'next/image'
export default function Testimonial() {
    const testimonials = [
        {
            name: "Michael Zhang", 
            bio: "Meditation Instructor", 
            feedback: "I've integrated HumanEra Intelligence into my mindfulness practice with incredible results. My students report deeper meditative states and enhanced emotional awareness after just weeks of use.",
            starts: 5,
            img : "/images/avatar.svg"
        },
                {
            name: "Michael Zhang", 
            bio: "Meditation Instructor", 
            feedback: "I've integrated HumanEra Intelligence into my mindfulness practice with incredible results. My students report deeper meditative states and enhanced emotional awareness after just weeks of use.",
            starts: 5,
            img : "/images/avatar.svg"
        },
        {
            name: "Michael Zhang", 
            bio: "Meditation Instructor", 
            feedback: "I've integrated HumanEra Intelligence into my mindfulness practice with incredible results. My students report deeper meditative states and enhanced emotional awareness after just weeks of use.",
            starts: 5,
            img : "/images/avatar.svg"
        }
    ]
    return(
        <Box>
            <Typography variant="h3" fontWeight='bold' sx={{textAlign: 'center'}} gutterBottom>What Our Users Say</Typography>
            <Typography variant="subtitle1" sx={{textAlign: 'center'}} gutterBottom>
                Hear from our community about their experiences with our platform.</Typography>
            <Box sx={{ display: 'flex', flexDirection: {sl: 'column', sm: 'column',md: 'row'}, alignItems: 'center', marginTop: 4, gap:2 }}>
                {
                    testimonials.map((item, idx) => {
                        return(
                            <Card variant='outlined' key={idx} sx={{ marginBottom: 2, p: 1, borderRadius: 4 }}>
                                <CardContent> 
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                                        <Image alt='img' src={item.img} width={50} height={50} />
                                        <Box>
                                            <Typography variant="h6">{item.name}</Typography>
                                            <Typography variant="subtitle2" color="textSecondary">{item.bio}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', marginTop: 1 }}>
                                            {Array.from({ length: item.starts }, (_, i) => (
                                                <span key={i} style={{ color: '#FFD700' }}>★</span>
                                            ))}
                                        </Box>
                                    </Box>

                                    <Typography variant="body1" fontSize='small' sx={{ marginTop: 1 }}>{item.feedback}</Typography>
                                    
                                </CardContent>
                            </Card> 
                        )
                    })
                }
            </Box>
        </Box>
    )
}