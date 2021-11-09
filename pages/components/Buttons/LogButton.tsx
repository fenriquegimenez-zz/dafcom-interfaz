import { styles } from "../../../styles/styles"
import { useAuth0 } from "@auth0/auth0-react"

export default function LogButton(authed: boolean) {
  const { loginWithRedirect, logout } = useAuth0()
  return (
    <div>
      <button
        className={styles.buttons}
        onClick={authed ? () => logout() : () => loginWithRedirect()}
      >
        {authed ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  )
}
