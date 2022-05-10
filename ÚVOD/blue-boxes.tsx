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
            <li>Pokládka podlah<hr /></li>
            <li>Obklady schodů<hr /></li>
            <li>Srovnání povrchu<hr /></li>
            <li>Nevim co ještě<hr /></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BlueBoxes
