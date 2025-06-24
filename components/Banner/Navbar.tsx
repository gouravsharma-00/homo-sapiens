'use client'
import { useState } from 'react'
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'

export default function Nav() {
    const navItems = [
                  { label: 'Home', href: '/' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'About', href: '/about' },
                ]
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      {isMobile ? (
        <>
          {/* Hamburger Icon */}
          <IconButton edge="end" onClick={toggleDrawer} sx={{ color: '#000' }}>
            <MenuIcon />
          </IconButton>

          {/* Drawer Menu */}
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
            >
              <List>
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton component={Link} href={item.href}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // Desktop Inline Links
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.href}
              sx={{
                color: '#000',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#2D3FDC',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      )}
    </>
  )
}
