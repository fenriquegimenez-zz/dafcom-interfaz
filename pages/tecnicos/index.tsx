import Alert from '../../components/Alerts'
import TecnicosTable from '../../components/Tables/tecnicos'
import { apiHost } from '../../helpers/variables'
import { TecnicosProps } from '../../types/types'

export default function Page({ tecnicos }: TecnicosProps) {
  return tecnicos.length > 0 ? (
    <TecnicosTable tecnicos={tecnicos} />
  ) : (
    <Alert header="Error" body="Aún no se han cargado tecnicos" />
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${apiHost}/tecnicos`)
  const { data } = await response.json()
  return {
    props: {
      tecnicos: data ? data : [],
    },
  }
}
