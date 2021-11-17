import LogButton from "../Buttons/LogButton"
import Image from "next/image"
import { backgroundImg, bgImgUrl } from "../../helpers/variables"
import { LandingProps } from "../../types/types"
import { styles } from "../../styles/styles"

export default function Landing({ auth }: LandingProps) {
  return (
    <div className={styles.index.loggedOut} style={backgroundImg}>
      <LogButton auth={auth} />
    </div>
  )
}
