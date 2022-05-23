import styles from './blue-boxes.module.css'
import imagestyles from '../components/styles/nextjsimage.module.css'
import Image from 'next/image'
import footerfbicon from '../images/icons/footerfbicon.svg'
import footerigicon from '../images/icons/footerigicon.svg'

const BlueBoxes = () => {
  return (
    <div className = {styles.blueBoxes}>
      <section className={styles.container}>
        <div className = {styles.leftBox}>
          <h3>SLUŽBY</h3>
          <hr />
          <ul>
            <li>Pokládka podlah</li>
            <li>Obklady schodů</li>
            <li>Srovnání povrchu</li>
            <li>Nevim co ještě</li>
          </ul>
        </div>
        <div className = {styles.rightBox}>
          <h3>KONTAKT</h3>
          <hr />
          <ul>
            <li>+420 777 023 023</li>
            <li>
              <Image src = {footerfbicon} layout = "intrinsic" width = {60} height = {60} />
              <Image src = {footerigicon} layout = "intrinsic" width = {60} height = {60} />
            </li>
            <li>info@podlahy-sucharda.cz</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BlueBoxes
