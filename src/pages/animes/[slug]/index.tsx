import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { EpisodeCard } from '../../../components/EpisodeCard';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { AnimeTypes } from '../../../protocols/AnimeTypes';
import api from '../../../services/api';
import styles from './styles.module.scss'; 

export default function Slug() {
    const [anime, setAnime] = useState<AnimeTypes>();
    const router = useRouter();
    const { slug } = router.query; 

    useEffect(() => {

        async function loadAnime() {
            const response = await api.get(`/animes?slug=${slug}`);
            setAnime(response.data[0]); 
        } 

        loadAnime();
 
    },[router.query])

    
    if(anime == undefined) return '';

    return (
        <div>
            <Head>
                <title>Assistir {anime.title} - Cineanim</title>
            </Head> 
            <Header/>
            <section className={styles.cover}>
                <img className={styles.cover_img} src={anime.thumbnail} alt="" />
                <section className={styles.cover_content}>
                    <section className={styles.cover_profile}>
                        <img className={styles.cover_thumbnail} src={anime.thumbnail} alt="" />
                    </section>
                    <section className={styles.cover_info}>
                        <h1>{anime.title}</h1>
                        <article className={styles.cover_data}>
                            <small className={styles.btn_main}>+{anime.age_group}</small>
                            <small className={styles.btn}>{anime.quality}</small>
                            <small className={styles.btn}>{anime.dub}</small>
                            <span className={styles.dot}></span>
                            <small>{anime.type}</small>
                            <span className={styles.dot}></span>
                            <small>Episódios {anime.episodes_amount}</small>
                            <span className={styles.dot}></span>
                            <small>{anime.duration}min</small>
                        </article>

                        <article className={styles.buttons}>
                            <button className="primary">Assistir agora</button>
                        </article>

                        <article className={styles.description}>
                            <p>{anime.description}</p>
                        </article>
                    </section>
                </section>
            </section>

            <section className={`${styles.episodes} container`}>
                <h1>Episódios</h1>

                <article className={styles.episodes_content}>
                    {anime.episodes.map((episode, index) => (   
                        <EpisodeCard episode={`0${index + 1}`} thumbnail={episode.thumbnail} title={episode.title} key={episode.id} href={`/animes/${anime.slug}/${index + 1}`} createdDate='24'/>
                    ))}
                </article>
            </section>

            <Footer/>
        </div>
    ) 
}