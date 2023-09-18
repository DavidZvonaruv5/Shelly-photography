import './globals.css'
import Navbar from "../components/Navbar"

export const metadata = {
  title: 'Shelly Shoval Photography',
  description: "Shelly's photography site ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
