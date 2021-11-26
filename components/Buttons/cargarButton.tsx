import { FormEvent, useState } from 'react'
import { styles } from '../../styles/styles'
import { TCargarButton } from '../../types/types'
import { apiHost } from '../../helpers/variables'
import notify from '../../helpers/notifier'

export default function CargarButton({
  recurso,
  body,
  endpoint,
  disabled,
}: TCargarButton) {
  async function loadingButton(e: FormEvent) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(body),
    }

    const response = await fetch(`${apiHost}/${endpoint}s`, options)
    const data = await response.json()

    notify(data)
  }

  return (
    <div className={styles.buttons.cargarButton}>
      <button
        className="btn btn-outline-dark"
        disabled={disabled}
        type="submit"
        onClick={loadingButton}
      >
        {`Cargar ${recurso}`}
      </button>
    </div>
  )
}
