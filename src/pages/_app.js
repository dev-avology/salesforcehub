
import Header from '@/components/HeaderFooter/Header';
import '../styles/globals.css';
import Footer from '@/components/HeaderFooter/Footer';



export default function MyApp({ Component, pageProps }) {
  return (
    <>
     
     <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>

    </>
  );
}
