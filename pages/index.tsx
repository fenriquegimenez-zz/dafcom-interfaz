import { useAuth0 } from "@auth0/auth0-react"
import LogButton from "./components/Buttons/LogButton"

export default function Index() {
  const { isAuthenticated } = useAuth0()
  return <>{LogButton(isAuthenticated)}</>
}
