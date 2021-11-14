import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import TecnicosForm from "../../components/Forms/Tecnicos"
import { apiHost } from "../../helpers/variables"

export default function Page({
  empresas,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return <TecnicosForm empresas={empresas} />
}

export async function getServerSideProps() {
  const response = await fetch(`${apiHost}/empresas`)
  const empresas = await response.json()
  return {
    props: {
      empresas,
    },
  }
}
