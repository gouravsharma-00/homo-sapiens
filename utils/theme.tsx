'use client'
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from '@mui/material/styles';
import {  CssBaseline, GlobalStyles } from '@mui/material';

const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-roboto)'
    }
})

export default function Theme({children}: {children: React.ReactNode}) {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
                'html, body': {
                    overflowX: 'hidden',
                },
                }}
            />
            {children}
        </ThemeProvider>
    )
}