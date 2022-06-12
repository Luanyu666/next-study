import Head from 'next/head';
import Layout from '../components/layout/layout'
import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>next study</title>
        <meta name='description' content='next.js study' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
