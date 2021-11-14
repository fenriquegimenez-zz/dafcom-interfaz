import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import ProveedoresForm from "../../components/Forms/Proveedores"

export default function Page({
  empresas,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return <ProveedoresForm />
}

// export async function getServerSideProps() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_ENDPOINT}/proveedores`
//   )
//   const empresas = await response.json()
//   return {
//     props: {
//       empresas,
//     },
//   }
// }
