import { styles } from "../../styles/styles"
import { useAuth0 } from "@auth0/auth0-react"
import { LandingProps } from "../../types/types"

export default function LogButton({ auth }: LandingProps) {
  const { loginWithRedirect, logout } = useAuth0()
  const { buttons } = styles
  return (
    <div className={buttons.background}>
      <button
        className={buttons.button}
        onClick={() => (auth ? logout() : loginWithRedirect())}
      >
        {auth ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  )
}
