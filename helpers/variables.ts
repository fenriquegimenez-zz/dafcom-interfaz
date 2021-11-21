import { ConnectOptions } from 'mongoose'
import { CSSProperties } from 'react'

export const apiHost = process.env.NEXT_PUBLIC_API_ENDPOINT as string
export const mainPage = process.env.NEXT_PUBLIC_MAIN_PAGE as string

export const bgImgUrl =
  'https://res.cloudinary.com/eg-software-factory/image/upload/v1637179003/Dafcom/fondo-dafcom_matxgf.svg'

export const torreUrl =
  'https://res.cloudinary.com/eg-software-factory/image/upload/v1637174160/Dafcom/signal-tower_semnxz.png'
export const backgroundImg: CSSProperties = {
  backgroundImage: `url("${bgImgUrl}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  margin: 0,
}

export interface TMongoConnection {
  isConnected?: boolean | number
}

export const mongoUri = process.env.DB_URL as string
