import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'

function HomePage() {
  return ( 
  <div className={styles.container}> 
    <Head>
      <title>
    </title>
    </Head>
    <NavBar />
  </div>
  )
}

export default HomePage;