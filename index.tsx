import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Hynotify</title>
      </Head>
      <h1>Hynotify</h1>
      <p>Notificações inteligentes</p>
    </Container>
  )
}

export default Home
