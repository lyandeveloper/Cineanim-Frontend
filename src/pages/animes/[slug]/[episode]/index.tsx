import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link';
import api from "../../../../services/api";
import styles from './styles.module.scss';
import Head from "next/head";
import { Header } from "../../../../components/Header";
import { AnimeTypes } from "../../../../protocols/AnimeTypes";
import { EpisodeTypes } from "../../../../protocols/EpisodeTypes";


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
                                <Link key={ep.id} href={`/animes/${slug}/${ep.id}`}>
                                    {`Episódio 0${ep.id}`}
                                </Link>
                            ))}
                        </aside> 
                    <video preload="metadata" controls poster={video?.thumbnail} src={video?.video}></video>
                </section>
            </section>    
        </div> 
    )
}