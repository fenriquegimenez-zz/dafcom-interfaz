import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { Table } from "react-bootstrap"
import { apiHost } from "../../helpers/variables"
import { styles } from "../../styles/styles"
import { ServiciosProps, TServicio } from "../../types/types"
import Title from "../Title"

export default function ServiciosTable({ servicios }: ServiciosProps) {
  return (
    <div className={styles.tables.generic}>
      <Title name="Últimos servicios"></Title>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Torre</th>
            <th>Descripción Servicio</th>
            <th>Proveedor</th>
            <th>Técnico</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map(servicio => {
            return (
              <tr key={servicio.id}>
                <td>{servicio.torre}</td>
                <td>{servicio.descripcion}</td>
                <td>{servicio.proveedor}</td>
                <td>{servicio.tecnico}</td>
                <td>{servicio.status ? "activo" : "No activo"}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${apiHost}/servicios`)
  const { servicios } = await response.json()

  return {
    props: {
      servicios,
    },
  }
}
