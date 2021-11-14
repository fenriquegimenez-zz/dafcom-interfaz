import { FormEvent, useState } from "react"
import { styles } from "../../styles/styles"
import { TCargarButton } from "../../types/types"
import { MdSignalWifiStatusbarConnectedNoInternet4 as NoSignal } from "react-icons/md"

export default function CargarButton({ recurso }: TCargarButton) {
  const [loading, setLoading] = useState(false)

  function loadingButton(e: FormEvent) {
    e.preventDefault()
    setLoading(prevState => !prevState)
  }

  return (
    <div className={styles.buttons.cargarButton}>
      <button className="btn btn-outline-dark" onClick={loadingButton}>
        {loading ? <NoSignal /> : `Cargar ${recurso}`}
      </button>
    </div>
  )
}
