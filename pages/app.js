import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head"
function MyApp({component, pageProps}){
  return (<>  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
  </Head>
  <GlobalStyle></GlobalStyle>
    
  </>

  )
}

  // {/* <div {...pageProps}/> */}
export default MyApp;