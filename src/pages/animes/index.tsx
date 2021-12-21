import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';
import { Slide } from '../../components/Slide';
import { EpisodeCard } from '../../components/EpisodeCard';
import { AnimeCard } from '../../components/AnimeCard';
import api from '../../services/api'; 
import { AnimeTypes } from '../../protocols/AnimeTypes';
import { Footer } from '../../components/Footer';

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
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://animesrubro.net/wp-content/uploads/2021/10/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu-2-01-Online-_-Animesrubro.jpg" 
                  title="Mushoku Tensei: Isekai Ittara Honki" 
                  episode="06" 
                  createdDate="5min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXp67rXI6DSqmbWIqv4_nLUAqhskGvkeRYc4B1254AMEx2b9qk4XqNq6cPzwSl-lEetL6CojjMAjlMpPij1wUhC8vRkD.jpg?r=78c" 
                  title="Black Lagoon" 
                  episode="04" 
                  createdDate="10min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://capitulo.news/wp-content/uploads/2021/07/Seirei-Gensouki-Spirit-Chronicles-1.jpg" 
                  title="Seirei Gensouki" 
                  episode="04" 
                  createdDate="20min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://hacchifansub.net/wp-content/uploads/2018/06/kuinaki-sentaku.jpg" 
                  title="Shingeki no Kyojin: Kuinaki Sentaku" 
                  episode="18" 
                  createdDate="25min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="http://chuvadenanquim.files.wordpress.com/2012/05/bakemono5.jpg" 
                  title="Bakemonogatari" 
                  episode="06" 
                  createdDate="45min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://www.animedia.com.br/wp-content/uploads/2017/04/accel.jpg" 
                  title="Accel World" 
                  episode="08" 
                  createdDate="48min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://1.bp.blogspot.com/-dYwEM61x1_s/XWCciJwdN2I/AAAAAAAAEkw/EYjIglx2iJk8tBfULWpjeBewaokqvzHWgCLcBGAs/s1600/arslan-senki.jpg" 
                  title="Arslan Senki" 
                  episode="15" 
                  createdDate="56min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://sucodemanga.com.br/wp-content/uploads/2021/07/naruto-shippuden-funimation-thumb.jpg" 
                  title="Naruto Shippuuden" 
                  episode="128" 
                  createdDate="1h"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbOVv3bexNpP3CGl0s4nyP2tOyRql69nWgnxxnORDZeqIkPipZzUxg_12ppwhS9daXl0c5uZbsUKqoeEaql-kGvRrLYi.jpg?r=7ce" 
                  title="Fairy Tail" 
                  episode="300" 
                  createdDate="1h15min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://criticalhits.com.br/wp-content/uploads/2021/06/Goku-vegeta.jpg" 
                  title="Dragon Ball Super" 
                  episode="80" 
                  createdDate="1h30min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://www.myanimesonline.biz/wp-content/uploads/2019/01/hunter-x-hunter-2011-episodio-64.jpg" 
                  title="Hunter x Hunter (2011)" 
                  episode="20" 
                  createdDate="1h45min"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://ptanime.com/wp-content/uploads/2020/04/Boku-no-Hero-Academia-4-cover.jpg" 
                  title="Boku No Hero Academia" 
                  episode="12" 
                  createdDate="2h"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/ichigo-bleach-trailer-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1" 
                  title="Bleach" 
                  episode="120" 
                  createdDate="1 dia"
                  href='#'
                />
                <EpisodeCard  
                  thumbnail="https://rollingstone.uol.com.br/media/_versions/one-piece-live-action-series-seemingly-coming-to-netflix_1fcz.h720_widelg.jpg" 
                  title="One Piece" 
                  episode="500" 
                  createdDate="2 dias"
                  href='#'
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
          
          <Footer/>
        </div>
    )
}