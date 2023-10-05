import './globals.css'

export const metadata = {
  title: 'Groove Guru',
  description: 'Groove Guru web app',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="he">
      <body>
        {children}
      </body>
    </html>
  )
}