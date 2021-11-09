import { useAuth0 } from "@auth0/auth0-react"
import Footer from "../Footer"
import Navbar from "../Navbar"

interface LayoutChild {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutChild) {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="container vh-100">
      {isAuthenticated && <Navbar />}
      {children}
      <Footer />
    </div>
  )
}
