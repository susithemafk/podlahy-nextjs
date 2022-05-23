import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './styles/navbar.module.css'

const NavBar = () => {
  return (
    <header id = "header-wide" className = {styles.header} > 
        <Link href = "/"><p className = {styles.logoo}>PODLAHY<br />SUCHARDA</p></Link>
        <nav className = {styles.nav}>
            <ul className = {styles.ul}>  
                <li className = {styles.li}><Link href = "/">ÚVOD</Link></li>
                <li className = {styles.li}><Link href = "/nase-prace">NAŠE PRÁCE</Link></li>
                <li className = {styles.li}><Link href = "/postup" >POSTUP</Link></li>
                <li className = {styles.li}><Link href = "/o-podlahach">O PODLAHÁCH</Link></li>
                <li className = {styles.li}><Link href = "/cenik">CENÍK</Link></li>
            </ul>
        </nav>
    </header>
  )
}



export default NavBar
