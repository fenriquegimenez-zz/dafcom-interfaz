import { CSSProperties } from "react"

export const apiHost = process.env.NEXT_PUBLIC_API_ENDPOINT as string

export const bgImgUrl =
  "https://res.cloudinary.com/eg-software-factory/image/upload/v1637179003/Dafcom/fondo-dafcom_matxgf.svg"

export const torreUrl =
  "https://res.cloudinary.com/eg-software-factory/image/upload/v1637174160/Dafcom/signal-tower_semnxz.png"
export const backgroundImg: CSSProperties = {
  backgroundImage: `url("${bgImgUrl}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  margin: 0,
}
