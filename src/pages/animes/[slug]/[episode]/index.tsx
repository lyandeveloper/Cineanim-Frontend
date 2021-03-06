import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link';
import api from "../../../../services/api";
import styles from './styles.module.scss';
import Head from "next/head";
import { Header } from "../../../../components/Header";
import { AnimeTypes } from "../../../../protocols/AnimeTypes";
import { EpisodeTypes } from "../../../../protocols/EpisodeTypes";
import { Footer } from "../../../../components/Footer";


export default function Episode() {
    const [anime, setAnime] = useState<AnimeTypes>();
    const [video, setVideo] = useState<EpisodeTypes>();
    const router = useRouter();
    const { slug, episode } = router.query;
    
    useEffect(() => { 
        loadEpisodes();

    }, [slug, episode]) 

    useEffect(() => { 
        loadEpisode();

    }, [anime])
    
    async function loadEpisodes() {  

        try {
            const response = await api.get(`/animes?slug=${slug}`);
            setAnime(response.data[0]);  

            console.log('EPISODIOS', response.data[0]);
        } catch(error) {
            console.log(error)
        }
        
        
    }

    const loadEpisode = () => {
        const result: any = anime?.episodes.find((ep: any) => {
            return ep.id == episode
        });  

        setVideo(result);
    }
    
    return(
        <div> 
            <Header/>
            <Head>
                {anime && <title>Assistir {anime?.title} Episódio 0{episode} - Cineanim</title>}
            </Head> 
            <section className={styles.cover}>
            <img src={anime?.thumbnail} alt="" />

                <section className={styles.player}>
                        <aside className={styles.sidebar}> 
                            {anime?.episodes.map(ep => (   
                                <li key={ep.id} className={router.asPath == `/animes/${slug}/${ep.id}` ? "active" : ""}> 
                                    <Link href={`/animes/${slug}/${ep.id}`}>
                                        {`Episódio 0${ep.id}`}
                                    </Link>
                                </li>
                            ))}
                        </aside> 
                    <video preload="metadata" controls poster={video?.thumbnail} src={video?.video}></video>
                </section>
            </section>  
            <Footer/>  
        </div> 
    )
}