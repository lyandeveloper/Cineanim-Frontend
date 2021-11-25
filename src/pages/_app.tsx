import '../styles/globals.scss'
import type { AppProps } from 'next/app' 

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <main>
      <Component {...pageProps}/>
    </main>
  
  ) 
}

export default MyApp
