'use client'

import { Raleway } from 'next/font/google'
import { ThemeProvider, createTheme } from "@mui/material/styles"

const raleway = Raleway({ subsets: ['latin'] })

const theme = createTheme({
  typography: {
    fontFamily: raleway.style.fontFamily
  }
})

export default function Theme({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
