import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'

function HomePage() {
  return ( 
  <div>
    <Head>
      <title>
    HANDSELECTED LIFE
    </title>
    </Head>
    handselected life
    <NavBar />
  </div>
  )
}

export default HomePage;