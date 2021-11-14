import { styles } from "../styles/styles"

export default function Spinner() {
  const { spinner } = styles
  return (
    <div
      className={spinner.div}
      style={{
        width: "3rem",
        height: "3rem",
      }}
    >
      <div className={spinner.border} role="status">
        <span className={spinner.span}>Cargando...</span>
      </div>
    </div>
  )
}
