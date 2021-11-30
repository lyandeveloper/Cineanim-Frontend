import Head from 'next/head';
import { Header } from '../../components/Header';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';
import { Slide } from '../../components/Slide';
import { EpisodeCard } from '../../components/EpisodeCard';
import { AnimeCard } from '../../components/AnimeCard';
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface EpisodeTypes {
  id: number,
  video: string,
  thumbnail: string,
  createdDate: string
}

interface AnimeTypes {
  id: number;
  title: string,
  slug: string;
  thumbnail: string; 
  type: string;
  dub: string;
  duration: number;
  aired: number;
  age_group: number;
  episodes_amount: number;
  status: string;
  category: string;
  episodes: EpisodeTypes []; 
}

export default function Animes() {
  const [animes, setAnimes] = useState<AnimeTypes[]>();

  useEffect(() => {
    async function loadLastAnimes() {
      const response = await api.get('/animes');
      setAnimes(response.data);
    } 

    loadLastAnimes();
  },[])

  if(animes == undefined) return '';

    return (
        <div>
          <Head>
            <title>Cineanim - Inicio</title>
          </Head> 
          <section className={styles.banner}> 
            <Header/>
              
              <Swiper 
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                autoplay={{ delay: 10000}}  
                slidesPerView={1} 
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }} 
                className={styles.swiper}
              > 

                  
                  <SwiperSlide>
                    <Slide 
                      video="https://cineanim.s3.amazonaws.com/slide01.mp4" 
                      title="Rise Of Shield Hero" 
                      type="TV" 
                      minutes="24" 
                      year="2019" 
                      quality="FULLHD" 
                      dub="LEG" 
                      description="Os Quatro Heróis Cardeais são um grupo de homens comuns do Japão moderno convocados ao reino de Melromarc para se tornarem seus salvadores. Melromarc é um país atormentado pelas Ondas da Catástrofe que repetidamente devastaram a terra e trouxeram desastres para seus cidadãos durante séculos" 
                    />
                  </SwiperSlide>
                   
                  <SwiperSlide>
                    <Slide 
                      video="https://cineanim.s3.amazonaws.com/slide02.mp4" 
                      title="Jujutsu Kaisen" 
                      type="TV" 
                      minutes="24" 
                      year="2021" 
                      quality="FULLHD" 
                      dub="LEG" 
                      description="Preguiçosamente se entregando a atividades paranormais infundadas com o Clube Ocultista, o estudante do ensino médio Yuuji Itadori passa seus dias na sala do clube ou no hospital, onde visita seu avô acamado." 
                    />
                  </SwiperSlide> 

                  <SwiperSlide>
                    <Slide 
                        video="https://cineanim.s3.amazonaws.com/slide03.mp4" 
                        title="Sword Art Online: Alicization - War of Underworld" 
                        type="TV" 
                        minutes="24" 
                        year="2020" 
                        quality="FULLHD" 
                        dub="LEG" 
                        description=" Apesar da derrota de Quinella - o pontífice da Igreja Axiom - as coisas ainda não pareciam se acalmar. Ao entrar em contato com o mundo real, Kazuto Kirigaya descobre que a tartaruga do oceano - um mega-flutuador controlado por Rath - foi invadida." 
                      />
                  </SwiperSlide> 

                <SwiperSlide>
                    <Slide 
                        video="https://cineanim.s3.amazonaws.com/slide04.mp4" 
                        title="Kimetsu no Yaiba" 
                        type="TV" 
                        minutes="24" 
                        year="2019" 
                        quality="FULLHD" 
                        dub="LEG" 
                        description="Desde a morte de seu pai, o fardo de sustentar a família recai sobre os ombros de Tanjirou Kamado. Apesar de viver na pobreza em uma montanha remota, a família Kamado pode desfrutar de uma vida relativamente tranquila e feliz." 
                      /> 
                </SwiperSlide> 
              </Swiper> 
          </section>

          <section className={`${styles.episodes_container} container`}>
            <h1>Novos Episódios</h1>
            <section className={styles.episodes_grid}>
              <EpisodeCard 
                thumbnail="https://www.animeunited.com.br/oomtumtu/2021/07/portada_jujutsu-kaisen-71.jpg" 
                title="Jujutsu Kaisen" 
                episode="01" 
                createdDate="1min"
              />
            </section>
          </section>

          <section className={`${styles.episodes_container} container`}>
            <h1>Últimos lançados</h1>
            <section className={styles.episodes_grid}>
              {animes.map((anime : AnimeTypes) => (
                <AnimeCard
                  key={anime.id} 
                  link={`/animes/${anime.slug}`} 
                  thumbnail={anime.thumbnail}
                  dub={anime.dub}
                  episodes={anime.episodes_amount}
                  title={anime.title} 
                  type={anime.type}
                  status={anime.status}
                />
              ))}
            </section>
          </section>
        </div>
    )
}