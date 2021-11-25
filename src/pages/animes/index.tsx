import Head from 'next/head';
import { Header } from '../../components/Header';

export default function Animes() {
    return (
        <div className="container">
          <Head>
            <title>Cineanim - Inicio</title>
          </Head> 

          <Header/>
        </div>
    )
}