import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from "next/app"
import { Auth0Provider } from "@auth0/auth0-react"
import Layout from "./components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={process.env.NEXT_PUBLIC_MAIN_PAGE as string}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  )
}

export default MyApp
