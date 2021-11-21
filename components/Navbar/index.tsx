import { styles } from '../../styles/styles'
import Image from 'next/image'
import Link from 'next/link'
import { torreUrl } from '../../helpers/variables'
import CargarDropdown from '../Dropdown/cargar'
import MenuDropdown from '../Dropdown/menu'

export default function Navbar() {
  const { navbar } = styles.nav
  return (
    <div className={navbar}>
      <div className="container-fluid">
        <Link passHref href="/">
          <div
            className="navbar-brand"
            style={{
              cursor: 'pointer',
            }}
          >
            <Image
              src={torreUrl}
              alt="Company logo"
              height="80%"
              width="72rem"
            />
          </div>
        </Link>
        <MenuDropdown />
        <CargarDropdown />
      </div>
    </div>
  )
}
