import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './styles/first-screen.module.css'
import imagestyles from './styles/nextjsimage.module.css'

import Image from 'next/image'
import envicon from '../images/icons/envicon.svg'
import fbicon from '../images/icons/fbicon.svg'
import igicon from '../images/icons/igicon.svg'
import phoneicon from '../images/icons/phoneicon.svg'
import floorer from '../images/floorer.jpg'

const FirstScreen = ({ pageName }: { pageName: String }) => {
  return (
    <div className = {styles.firstScreen}>
        <section className = {styles.section}>
          <div className = {styles.div}>
            <h1>KVALITNÍ POKLÁDKA PODLAH</h1>
            <div className = {styles.imgdiv}><Image className = {styles.img} src = {floorer} layout = "responsive" /></div>
          </div>
          <h1 className = {styles.podlahysucharda}>PODLAHY SUCHARDA</h1>
            {/* <h2>{pageName}</h2> */}

            {/* <div className = {imagestyles.image_container}>
                <div className = {imagestyles.image_parent}><Image src = {phoneicon} layout = "intrinsic" width = {100} height = {100} /></div>
                <div className = {imagestyles.image_parent}><Image src = {igicon} layout = "intrinsic" width = {100} height = {100} /></div>
                <div className = {imagestyles.image_parent}><Image src = {envicon} layout = "intrinsic" width = {100} height = {100} /></div>
                <div className = {imagestyles.image_parent}><Image src = {fbicon} layout = "intrinsic" width = {100} height = {100} /></div>
            </div> */}

            
        </section>
        <h2 className = "h2">{pageName}</h2>
    </div>
  )
}



export default FirstScreen
