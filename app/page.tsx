import { Container, Typography } from '@mui/material'
import React from 'react'
import Banner from '@components/Banner/Banner'
import Philosophy from '@components/Philosophy/Philosophy'
import Vision from '@components/Vision/Vision'
import Potential from '@components/Potential/Potential'
import Testimonial from '@components/Testimonial/Testimonial'
import Footer from '@components/Footer/Footer'
import Faq from '@components/FAQ/Faq'
export default function Page() {
    return(
        <>
            <Banner />
            <Container>
                <Philosophy />
            </Container>
            <Vision />
            <Container>
                <Potential />
                <Testimonial />
                <Faq />
            </Container>
            <Footer />
        </>
        
    )
}