import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import TecnicosForm from '../../../components/Forms/Tecnicos'
import { apiHost } from '../../../helpers/variables'
import { TEmpresa } from '../../../types/types'

export default function Page({
  empresas,
}: InferGetServerSidePropsType<TEmpresa>) {
  console.log(empresas)
  return <TecnicosForm empresas={empresas} />
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
