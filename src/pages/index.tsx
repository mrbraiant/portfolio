import { HomeTemplate } from '@templates/home';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Braioso Dev</title>
        <meta
          name="description"
          content="That's my portfolio by Braiant Malta"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Hurricane&amp;display=swap"
          rel="stylesheet"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </div>
  );
};

export default Home;
