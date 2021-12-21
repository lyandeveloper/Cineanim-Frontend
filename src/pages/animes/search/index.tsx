import Head from "next/head";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { AnimeCard } from "../../../components/AnimeCard";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { AnimeTypes } from "../../../protocols/AnimeTypes";
import api from "../../../services/api";
import styles from './styles.module.scss';

export default function Search() {
    const router = useRouter();
    const [ animes, setAnimes ] = useState<AnimeTypes[]>();
    const { title } = router.query;

    useEffect(() => {
        async function loadAnimes() {
            const response = await api.get(`/animes?title_like=${title}`);
            setAnimes(response.data);
        }

        loadAnimes();
    },[title])

    return(
        <div>
            <Header/>
            <Head>
                <title>Pesquisa - {title} - Cineanim</title>
            </Head>
            <section className={`${styles.search} container`}> 
                <h1>Resultados para: {title}</h1>

                <article className={styles.animes}>
                    {animes?.map((anime: AnimeTypes) => (
                        <AnimeCard 
                            link={`/animes/${anime.slug}`}
                            key={anime.id} 
                            thumbnail={anime.thumbnail}
                            dub={anime.dub}
                            episodes={anime.episodes_amount}
                            title={anime.title}
                            type={anime.type}
                            status={anime.status} 
                        />
                    ))}
                </article>
            </section>
            <Footer/>
        </div>
    )
}