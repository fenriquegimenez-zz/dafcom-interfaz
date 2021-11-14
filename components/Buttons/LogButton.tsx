import { styles } from "../../styles/styles"
import { useAuth0 } from "@auth0/auth0-react"

export default function LogButton(authed: boolean) {
  const { loginWithRedirect, logout } = useAuth0()
  const { buttons } = styles
  return (
    <div className={buttons.background}>
      <button
        className={buttons.button}
        onClick={() => (authed ? logout() : loginWithRedirect())}
      >
        {authed ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  )
}
