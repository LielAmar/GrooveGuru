import './globals.css'

export const metadata = {
  title: 'Groove Guru',
  description: 'Groove Guru web app',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:100,200,300,400,500,600,700,800&subset=latin,hebrew"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}