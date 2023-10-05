import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Theme from '../../components/Theme/Theme'
import { CssBaseline } from '@mui/material'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kosuka',
  description: "kosuka's personal site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CssBaseline />
      <Theme>
        <html lang="en">
          <body className={raleway.className}>{children}</body>
        </html>
      </Theme>
    </>
  )
}
