import styles from './first-three-boxes.module.css'
import imagestyles from '../components/styles/nextjsimage.module.css'
import Image from 'next/image'
import footerfbicon from '../images/icons/footerfbicon.svg'
import footerigicon from '../images/icons/footerigicon.svg'

const FirstThreeBoxes = () => {
  return (
    <section className={styles.container}>
      <div className = { `${ styles.left } ${ styles.active }` }>
        <h3>SLUŽBY</h3>
        <hr />
        <ul>
          <li>VINYLOVÉ PODLAHY</li>
          <li>PLOVOUCÍ PODLAHY</li>
          <li>KOBERCE</li>
          <li>PVC PODLAHY</li>
        </ul>
      </div>
      <div className = {styles.center}>
        <h3>NAŠE PRÁCE</h3>
        <hr />
        <ul>
          <li>VINYLOVÉ PODLAHY</li>
          <li>PLOVOUCÍ PODLAHY</li>
          <li>KOBERCE</li>
          <li>PVC PODLAHY</li>
        </ul>
      </div>
      <div className = {styles.right}>
        <h3>KONTAKT</h3>
        <hr />
        <ul>
          <li>+420 723 123 123</li>
          <li>
            <div className = {imagestyles.image_container}>
              <div className = {imagestyles.image_parent}><Image src = {footerfbicon} layout = "intrinsic" width = {100} height = {100} /></div>
              <div className = {imagestyles.image_parent}><Image src = {footerigicon} layout = "intrinsic" width = {100} height = {100} /></div>
            </div>
          </li>
          <li>info@podlahy-sucharda.cz</li>
        </ul>
      </div>
    </section>
  )
}

export default FirstThreeBoxes
