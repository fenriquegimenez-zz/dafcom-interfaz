import LogButton from '../Buttons/LogButton'
import { backgroundImg } from '../../helpers/variables'
import Logo from '../../public/logo-curvas.svg'
import Image from 'next/dist/client/image'
import { LandingProps } from '../../types/types'
import { styles } from '../../styles/styles'

export default function Landing({ auth }: LandingProps) {
  return (
    <div className={styles.index.loggedOut} style={backgroundImg}>
      <Image src={Logo} alt="Company's logo" />
      <LogButton auth={auth} />
    </div>
  )
}
