import { useAuth0 } from "@auth0/auth0-react"
import { styles } from "../../styles/styles"
import LogButton from "../Buttons/LogButton"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Spinner from "../Spinner"
import { LayoutChild } from "../../types/types"
import Landing from "../Landing"

export default function Layout({ children }: LayoutChild) {
  const { isAuthenticated: auth, isLoading } = useAuth0()
  return (
    <div className="container-fluid vh-100">
      {isLoading ? (
        <Spinner />
      ) : auth ? (
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      ) : (
        <Landing auth={auth} />
      )}
    </div>
  )
}
