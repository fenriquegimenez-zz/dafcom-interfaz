import Alert from '../../components/Alerts'
import EmpresasTable from '../../components/Tables/empresas'
import { apiHost } from '../../helpers/variables'
import { EmpresasProps } from '../../types/types'

export default function Page({ empresas }: EmpresasProps) {
  return empresas.length > 0 ? (
    <EmpresasTable empresas={empresas} />
  ) : (
    <Alert header="Error" body="Aún no se han cargado instituciones" />
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${apiHost}/empresas`)
  const { data } = await response.json()
  return {
    props: {
      empresas: data ? data : [],
    },
  }
}
