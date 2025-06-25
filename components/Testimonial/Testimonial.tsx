'use client'

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
            img: "/images/avatar.svg"
        },
        {
            name: "Michael Zhang",
            bio: "Meditation Instructor",
            feedback: "I've integrated HumanEra Intelligence into my mindfulness practice with incredible results. My students report deeper meditative states and enhanced emotional awareness after just weeks of use.",
            starts: 5,
            img: "/images/avatar.svg"
        },
        {
            name: "Michael Zhang",
            bio: "Meditation Instructor",
            feedback: "I've integrated HumanEra Intelligence into my mindfulness practice with incredible results. My students report deeper meditative states and enhanced emotional awareness after just weeks of use.",
            starts: 5,
            img: "/images/avatar.svg"
        }
    ]

    return (
        <Box>
            <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
                What Our Users Say
            </Typography>
            <Typography variant="subtitle1" textAlign="center" gutterBottom>
                Hear from our community about their experiences with our platform.
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflowX: 'auto',
                    gap: 2,
                    mt: 4,
                    pb: 2,
                    px: 1,
                    scrollSnapType: 'x mandatory',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
            >
                {testimonials.map((item, idx) => (
                    <Card
                        variant="outlined"
                        key={idx}
                        sx={{
                            flex: '0 0 auto',
                            minWidth: 300,
                            maxWidth: 350,
                            borderRadius: 4,
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Image alt="img" src={item.img} width={50} height={50} />
                                <Box>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {item.bio}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', mb: 1 }}>
                                {Array.from({ length: item.starts }, (_, i) => (
                                    <span key={i} style={{ color: '#FFD700' }}>★</span>
                                ))}
                            </Box>

                            <Typography variant="body2">{item.feedback}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}
