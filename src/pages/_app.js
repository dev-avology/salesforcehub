
import Header from '@/components/HeaderFooter/Header';
import '../styles/globals.css';
import Footer from '@/components/HeaderFooter/Footer';
import Head from 'next/head';



export default function MyApp({ Component, pageProps }) {
  return (
    <>
     
     <Header/>
     <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>

    </>
  );
}
