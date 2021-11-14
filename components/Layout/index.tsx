import { useAuth0 } from "@auth0/auth0-react"
import { styles } from "../../styles/styles"
import LogButton from "../Buttons/LogButton"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Spinner from "../Spinner"

interface LayoutChild {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutChild) {
  const { isAuthenticated, isLoading } = useAuth0()
  return (
    <div className="container-fluid vh-100">
      {isLoading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      ) : (
        <div className={styles.index.loggedOut}>
          {LogButton(isAuthenticated)}
        </div>
      )}
    </div>
  )
}
