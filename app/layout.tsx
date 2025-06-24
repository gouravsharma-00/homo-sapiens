import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import Theme from '@utils/theme';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
    return(
        <html lang='en' className={roboto.className}>
            <head></head>
            <body>
                <AppRouterCacheProvider>
                    <Theme>
                        {children}
                    </Theme>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}