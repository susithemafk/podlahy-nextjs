import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FirstScreen from '../components/first-screen'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Postup: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Postup - Podlahy Sucharda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <FirstScreen pageName = {"POSTUP"} />
      </main>

    </div>
  )
}

export default Postup
